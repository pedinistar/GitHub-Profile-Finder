import { IoSearch } from "react-icons/io5";

function EmptyState() {
  return (
    <div className="flex-1 flex justify-center mt-30">
      <div className="text-center">
        <IoSearch className="text-5xl text-(--lighter-border) w-full m-auto" />
        <h2 className="mt-4 text-xl font-semibold">Find a GitHub Profile</h2>
        <p className="mt-3 text-(--lighter-border)">
          Type any GitHub username
          <br /> above and hit Search to see <br /> their profile.
        </p>
      </div>
    </div>
  );
}

export default EmptyState;
