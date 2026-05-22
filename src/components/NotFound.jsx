import { BsExclamationCircle } from "react-icons/bs";

function NotFound({ userInput }) {
  return (
    <div className="w-full mt-30 flex-1 flex items-center flex-col">
      <BsExclamationCircle className="text-6xl rounded-full text-(--text) p-3 bg-(--border) border border-red-500/50" />

      <h2 className="font-semibold text-xl mt-5">User not found</h2>
      <p className="mt-3 text-(--lighter-border) w-60 text-center">
        "{userInput}" doesn't exist on GitHub. Check the spelling and try again
      </p>
    </div>
  );
}

export default NotFound;
