import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../app/reducers/userReducer";

function Login() {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
    setLoginData({ email: "", password: "" });
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={loginData.email}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={loginData.password}
            />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>

      <Link to="/register">Register</Link>
    </>
  );
}

export default Login;
