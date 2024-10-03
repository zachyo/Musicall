import { useState } from "react";
import SignIn from "./login.component";
import SignUp from "./logup.component";

const Select = () => {
  const [option, setOption] = useState("login");
  const handleButton = () => {
    option === "login" ? setOption("signup") : setOption("login");
  };
  return (
    <div className="select mt-8 md:mt-4 flex h-[75vh] items-center justify-center flex-col">
      {option === "signup" && (
        <>
          <SignUp />
          <p className="mx-4 mt-12 text-sandy text-base md:text-xl mb-6 lg:mb-0">
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
          <p className="mx-4 mt-12 text-sandy text-base md:text-xl">
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
