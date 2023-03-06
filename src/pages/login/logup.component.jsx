import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
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
        return res.json();
      })
      .then((data) => {
        console.log("here2");
        localStorage.setItem("user", data);
        data.message === "User Created"
          ? navigate("/")
          : console.log(data.message);

        clearUser();
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
      <div className="signin">
        <div className="signup">
          <h1 className="mb-12 text-4xl font-bold text-lightSteel">
            Create Account
          </h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputs flex justify-center flex-wrap w-[51rem]">
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
              <div className="group">
                <select
                  name="gender"
                  className="form-input dropdown"
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
              <p className="text-lightSteel">
                {" "}
                I Accept The <Link to="/" className="underline">Terms and Conditions</Link>
              </p>
            </div>

            <button type="submit" disabled={isSending} onClick={handleSubmit}>
              Create Account
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
      </div>
    
  );
};

export default SignUp;
