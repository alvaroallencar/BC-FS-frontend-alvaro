import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../app/reducers/userReducer";

function Register() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    setUser({ name: "", email: "", phoneNumber: "", password: "" });
  };

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <span>Name</span>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={user.name}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phoneNumber">
            <span>Phone</span>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              value={user.phoneNumber}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={user.email}
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
              value={user.password}
            />
          </label>
        </div>

        <button type="submit">Register</button>
      </form>

      <Link to="/login">Login</Link>
    </>
  );
}

export default Register;
