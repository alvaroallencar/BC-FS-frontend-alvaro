import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../app/reducers/userReducer";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const handleUpdate = (email) => {
    navigate("/home/update", { state: { email } });
  };

  const handleDelete = (email) => {
    dispatch(deleteUser(email));
  };

  return (
    <>
      <h1>User CRUD with Reducer</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button onClick={() => handleUpdate(user.email)}>Update</button>
                <button onClick={() => handleDelete(user.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/login">Logout</Link>
    </>
  );
}

export default Home;
