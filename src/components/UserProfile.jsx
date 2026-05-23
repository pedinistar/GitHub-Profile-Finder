import ReposList from "./ReposList";
import { IoPeople } from "react-icons/io5";
import { IoMdFlag } from "react-icons/io";

function UserProfile({ userData, latestRepos }) {
  return (
    <div className="px-10 lg:px-40 flex flex-col md:flex-row justify-center items-start lg:items-start gap-10 lg:gap-20 pt-10 lg:pb-5">
      <div className="w-full md:w-[60%] lg:w-[40%]">
        <div className="profile-card mt-6">
          <div className="profile-header flex gap-5">
            <div className="img-container w-14 h-14 border-2 border-(--lighter-border) rounded-full overflow-hidden">
              <img src={userData.avatar_url} alt={userData.name} />
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                {userData.name || "No Name"}
              </h1>
              <p className="text-(--lighter-border) text-sm">
                {userData.login}
              </p>
            </div>
          </div>
          <div className="profile-body mt-8">
            {userData.bio && <div className="bio mt-8">{userData.bio}</div>}
          </div>
          <div className="profile-footer text-xs flex mt-4">
            <IoPeople className="text-(--lighter-border) text-sm" />
            <p className="font-semibold">
              &nbsp; {userData.followers}&nbsp;
              <span className="text-(--lighter-border) font-normal">
                followers •
              </span>
              &nbsp; {userData.following}&nbsp;
              <span className="text-(--lighter-border) font-normal">
                following
              </span>
            </p>
          </div>
          <div className="text-xs mt-3 flex items-center font-semibold">
            <IoMdFlag className="text-(--lighter-border) text-sm" />
            &nbsp;{userData.public_repos} &nbsp;
            <span className="font-normal text-(--lighter-border)">
              Public Repos
            </span>
          </div>
          <button className="mt-10 rounded-xl cursor-pointer w-full text-center py-2 text-(--primary) text-sm font-semibold border">
            <a href={userData.html_url} target="_blank">
              View Profile
            </a>
          </button>
        </div>
      </div>
      <ReposList latestRepos={latestRepos} />
    </div>
  );
}

export default UserProfile;
