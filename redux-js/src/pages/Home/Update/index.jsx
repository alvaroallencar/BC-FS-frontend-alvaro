import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../../../app/reducers/userReducer";

function Update() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ email: location.state.email, user }));
    navigate("/home");
  };

  return (
    <>
      <h1>Update user</h1>

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

        <button type="submit">Update</button>
      </form>

      <Link to="/home">Go Back</Link>
    </>
  );
}

export default Update;
