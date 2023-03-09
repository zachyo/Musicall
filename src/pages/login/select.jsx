import { useState } from "react";
import SignIn from "./login.component";
import SignUp from "./logup.component";

const Select = () => {
  const [option, setOption] = useState("login");
  const handleButton = () => {
    option === "login" ? setOption("signup") : setOption("login");
  };
  return (
    <div className="select" style={{ height: "120vh" }}>
      {option === "signup" && (
        <>
          <SignUp />
          <p className="mt-12 text-sandy text-xl">
            Do you have an account already? Login{" "}
            <button
              onClick={handleButton}
              className="italic underline font-bold"
            >
              here
            </button>
          </p>
        </>
      )}
      {option === "login" && (
        <>
          <SignIn />
          <p className="mt-12 text-sandy text-xl">
            Don't have an account yet? Signup{" "}
            <button
              onClick={handleButton}
              className="italic underline font-bold"
            >
              here
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Select;
