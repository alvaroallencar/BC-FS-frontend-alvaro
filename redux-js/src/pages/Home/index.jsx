import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.users);

  console.log(users);

  return (
    <>
      <h1>User CRUD with Reducer</h1>

      <button>Create +</button>

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
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
