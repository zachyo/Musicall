import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../components/form-input/form-input.component";

import useMusicallStore from "../../store/musicallStore";
// import google from "../assets/icons/Google.png";
// import facebook from "../assets/icons/Facebook.png";
import "./signin.styles.scss";
import { LoaderCircle } from "lucide-react";
import { BASE_URL } from "../../utilities/useFetch";
// import "./signup.styles.scss";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { email, password } = user;
  const navigate = useNavigate();
  const setUserLoggedIn = useMusicallStore((state) => state.setUserLoggedIn);
  const notifySuccess = () =>
    toast.info("LogIn Successfull", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyError = (msg) =>
    toast.error(msg ?? "Error Loggin In", {
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
    if (user.email.length === 0 || user.password.length === 0) return
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

    fetch(`${BASE_URL}/auth/login`, sendOptions)
      .then((res) => {       
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status_code === 401 || data.status_code === 404) {
          notifyError(data.message);
          setIsSending(false);
        }      

        if (data.status_code === 200) {
          notifySuccess();
          localStorage.setItem("user", data?.data?.user);
          localStorage.setItem("access_token", data?.access_token);
          setUserLoggedIn(true);
          setIsSending(false);
          clearUser();
          navigate("/loggedin");
        }
        // setTimeout(function () {
        //   data.msg === "login Successful"
        //     ? navigate("/loggedin")
        //     : console.log(data.msg);
        // }, 2000);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="signin md:w-[88vw]">
      <div className="signup mx-4 md:m-0">
        <h1 className="mb-12 text-4xl font-bold text-lightSteel">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs flex flex-col justify-center flex-wrap md:gap-8 md:flex-row">
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
          {/* <div className="TandT flex items-center mb-1">
            <input type="checkbox" name="acceptance" required />
            <p className="text-lightSteel text-[14px] md:text-[16px]">
              {" "}
              I Accept The{" "}
              <Link to="/" className="underline">
                Terms and Conditions
              </Link>
            </p>
          </div> */}

          <button
            type="submit"
            disabled={isSending}
            onClick={handleSubmit}
            className="md:text-2xl flex items-center justify-center mt-5"
          >
            {isSending === true ? <LoaderCircle className="animate-spin my-1"/> : "Submit"}
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

export default SignIn;
