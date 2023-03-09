import { Link } from "react-router-dom";

const LoggedIn = () => {
  //not sure
  const user = localStorage.getItem("user");
  return (
    <div className="signin h-[55vw]">
      <h1 className="mt-32 mb-12 text-4xl font-bold text-lightSteel">
        Welcome to Musicall
      </h1>
      <p className="text-sandy text-xl">Hi {user?.name}, You're logged in.</p>
      <p className="text-sandy text-xl">
        Click{" "}
        <Link to={"/"} className="underline italic">
          here
        </Link>{" "}
        to get started.
      </p>
    </div>
  );
};

export default LoggedIn;
