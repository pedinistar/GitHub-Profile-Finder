import "./App.css";
import LoadingState from "./components/LoadingState";
import UserProfile from "./components/UserProfile";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState("empty");
  const [userInput, setUserInput] = useState("");
  const [userData, setUserData] = useState({});
  const [repoData, setRepoData] = useState([]);
  const [searchedUsername, setSearchedUsername] = useState("");

  let latest3Repos = repoData.slice(0, 3);

  async function fetchUserData() {
    if (userInput === "") {
      alert("Please enter a username.");
      return;
    }

    setState("loading");

    setSearchedUsername(userInput);

    try {
      const res = await fetch(
        `https://api.github.com/users/${userInput.toLowerCase().trim()}`,
      );

      const data = await res.json();

      if (data.message === "Not Found") {
        setState("notfound");
        return;
      }

      const res2 = await fetch(
        `https://api.github.com/users/${userInput.trim().toLowerCase()}/repos?sort=updated&per_page=6`,
      );

      const data2 = await res2.json();

      setUserData(data);
      setRepoData(data2);

      setUserInput("");

      setState("success");
    } catch (err) {
      setState("notfound");
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-(--muted-bg) text-(--text) flex flex-col justify-between">
      <Header
        userInput={userInput}
        setUserInput={setUserInput}
        fetchUserData={fetchUserData}
      />

      {state === "empty" && <EmptyState />}
      {state === "loading" && <LoadingState />}
      {state === "notfound" && <NotFound userInput={searchedUsername} />}
      {state === "success" && (
        <UserProfile userData={userData} latestRepos={latest3Repos} />
      )}

      <Footer />
    </div>
  );
}

export default App;
