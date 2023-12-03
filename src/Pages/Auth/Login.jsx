import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import MySwal from "../../Utils/sweetalert";
import { useCookies } from "react-cookie";
import CryptoJS from "crypto-js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["session"]);
  const navigate = useNavigate();

  const loginCheck = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user/login", {
        username: username,
        password: password,
      });
      console.log(response);
      if (response.data.status === "fail") {
        MySwal.fire({
          title: "Error",
          text: "Wrong username or password",
          icon: "error",
          confirmButtonColor: "#4E426D",
        });
        return;
      } else {
        MySwal.fire({
          title: "Success",
          text: "Login success",
          icon: "success",
          confirmButtonColor: "#4E426D",
        }).then(() => {
          setCookie("session", response.data.data.accessToken, { path: "/" });
          setCookie(
            "session_ga",
            CryptoJS.AES.encrypt(
              response.data.data.refreshToken,
              process.env.REACT_APP_HASH_KEY
            ).toString(),
            { path: "/" }
          );

          const encryptUserId = CryptoJS.AES.encrypt(
            response.data.data.userId,
            process.env.REACT_APP_HASH_KEY
          ).toString();

          localStorage.setItem("userid", encryptUserId);
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-9  d-flex justify-content-center align-items-center">
          <div className="col-lg-4 bg-white box shadow m-auto rounded-4 p-4 ">
            <h4 className="text-center fw-semibold mt-4">
              Login With Your Account
            </h4>
            <form className="mt-5" onSubmit={loginCheck}>
              <div className="form-group px-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-input"
                  id="username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group px-3 mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-input"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group px-3 mt-4">
                <input
                  type="submit"
                  className="button b-primary text-white rounded-3 border-0 w-100"
                  value="Login"
                />
              </div>
              <p className="text-center mt-3">
                Not yet registered? register
                <Link to="/register" className="t-secondary">
                  &nbsp;here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
