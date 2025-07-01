import React from "react";
import UserListItems from "./UserListItems";

const UserList = ({ users, setUsers }) => {
  return (
    <>
      <div
      // style={{
      //   backgroundColor: "black",
      //   color: "white",
      //   paddingLeft: "140px",
      // }}
      >
        <table>
          <thead>
            <th>ID :</th>
            <th>Name :</th>
            <th>Age :</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserListItems key={user.id} user={user} setUsers={setUsers} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
