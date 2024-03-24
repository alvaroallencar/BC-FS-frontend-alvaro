import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (!foundUser) {
      return alert("Email and password don't match");
    }

    setLoginData({ email: "", password: "" });

    navigate("/home");
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
