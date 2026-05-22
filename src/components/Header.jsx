import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Header({ userInput, setUserInput, fetchUserData }) {
  return (
    <header className="bg-(--bg) px-10 lg:px-40 py-10">
      <div className="flex items-center gap-2 font-semibold text-2xl">
        <FaGithub />
        <h1>
          GitHub <span className="text-(--primary)">Profile Finder</span>
        </h1>
      </div>

      <div className="flex items-center w-full mt-8 border border-(--border) pl-4 bg-(--muted-bg) rounded-lg overflow-hidden">
        <IoSearch className="text-xl" />
        <input
          type="text"
          placeholder="Enter username..."
          className="w-full ml-3 py-2 outline-none bg-transparent"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchUserData()}
        />
        <button
          className="text-sm px-4 py-3 border-l border-(--border) cursor-pointer transition-colors duration-200 hover:bg-white/5 hover:text-(--primary) rounded-r-lg hover:font-semibold"
          onClick={fetchUserData}
        >
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
