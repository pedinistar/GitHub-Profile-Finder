import RepoCard from "./RepoCard";

function ReposList({ latestRepos }) {
  return (
    <div className="lg:w-[40%] lg:mt-6">
      <h3 className="font-semibold border-b-3 py-1 border-(--primary) inline-block">
        Latest Repositories
      </h3>
      <div className="repos mt-6 flex flex-col gap-6">
        {latestRepos.map(function (repo) {
          return <RepoCard key={repo.id} repo={repo} />;
        })}
      </div>
    </div>
  );
}

export default ReposList;
