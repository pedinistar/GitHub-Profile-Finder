import { FaStar } from "react-icons/fa";

function RepoCard({ repo }) {
  return (
    <div className="w-full border border-(--lighter-border)/40 bg-(--lighter-border)/10 rounded-lg px-5 py-4">
      <h4 className="text-sm font-semibold text-(--primary)">{repo.name}</h4>
      <p className="text-xs mt-1 text-(--lighter-border) font-medium">
        {repo.description || "No description"}
      </p>
      <div className="text-xs mt-3 flex items-center gap-4 text-(--lighter-border)">
        <p>{repo.language || "No language"}</p>
        <p className="flex items-center gap-1">
          <FaStar />
          {repo.stargazers_count}
        </p>
        <p>Updated on {new Date(repo.updated_at).toLocaleDateString()}</p>
      </div>

      <a href={repo.html_url} target="_blank">
        <button className="text-xs w-full border mt-5 py-2 rounded-lg cursor-pointer">
          View Repo
        </button>
      </a>
    </div>
  );
}

export default RepoCard;
