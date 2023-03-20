import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../components/form-input/form-input.component";
import Spinner from "../../components/spinner/spinner.component";
// import google from "../assets/icons/Google.png";
// import facebook from "../assets/icons/Facebook.png";
import "./signin.styles.scss";
// import "./signup.styles.scss";

const SignUp = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    gender: "",
    password: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { first_name, last_name, email, password, gender, username } = user;
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast.info("Account Created", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyError = () =>
    toast.error("Error Creating Account", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const clearUser = () => {
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = "";
      input.checked = false;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const sendOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("https://music-api-7oyo.onrender.com/api/register", sendOptions)
      .then((res) => {
        console.log("here");
        console.log(res);
        if (!res.ok) {
          notifyError();
        }
        return res.json();
      })
      .then((data) => {
        if (data.message === "User Created") {
          notifySuccess();
        }
        console.log(data);
        localStorage.setItem("user", data.user);
        setTimeout(function () {
          setIsSending(false);
          data.message === "User Created"
            ? window.location.reload()
            : console.log(data.message);
        }, 2000);
        clearUser();
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="signin md:w-[88vw]">
      <div className="signup mx-4 md:m-0">
        <h1 className="mb-12 text-4xl font-bold text-lightSteel">
          Create Account
        </h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs flex flex-col justify-center flex-wrap md:gap-x-8 md:flex-row">
            <FormInput
              type="text"
              name="first_name"
              label="First Name"
              placeholder="First Name"
              value={first_name}
              onChange={handleChange}
              required
            />
            <FormInput
              type="text"
              name="last_name"
              label="Last Name"
              placeholder="Last Name"
              value={last_name}
              onChange={handleChange}
              required
            />
            <FormInput
              type="email"
              name="email"
              label="Email Address"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              required
            />
            <FormInput
              type="email"
              name="username"
              label="Username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              required
            />
            {/* //gender */}
            <div className="group md:w-[25.5rem]">
              <select
                name="gender"
                className="form-input dropdown w-full my-3 p-3 md:p-[1rem] md:my-[1.2rem]"
                onChange={handleChange}
                value={gender}
              >
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="noAns">Prefer not to say</option>
              </select>
            </div>
            <FormInput
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
              pattern="[A-Za-z0-7]{8,}"
              title="Password must include number and alphabet, no symbols"
            />
          </div>
          {/* <p className="valid">Password must be 8 characters long</p> */}
          <div className="TandT flex items-center mb-1">
            <input type="checkbox" name="acceptance" required />
            <p className="text-lightSteel text-[14px] md:text-[16px]">
              {" "}
              I Accept The{" "}
              <Link to="/" className="underline">
                Terms and Conditions
              </Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={isSending}
            onClick={handleSubmit}
            className=""
          >
            {isSending === true ? <Spinner /> : "Create Account"}
          </button>
        </form>
        {/* <p>
            Already have an account?{"  "}
            <Link to="/signin">Sign In</Link>
          </p> */}
        {/* <div className="otherSignIn">
            <div className="line">
              <hr />
              <p>Or sign in with</p>
              <hr />
            </div>

            <div className="social">
              <div className="app">
                <Link to="/">
                  <img src={google} alt="google" />
                  <p>Google</p>
                </Link>
              </div>
              <div className="app">
                <Link to="/">
                  <img src={facebook} alt="facebook" />
                  <p>Facebook</p>
                </Link>
              </div>
            </div>
          </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
