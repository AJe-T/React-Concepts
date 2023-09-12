import React, { useState } from "react";
import { UserServices } from "../Services/UserServices";
import { IUsers } from "../Models/IUsers";
interface IProps {
  reciveUserList: (user: IUsers) => void;
}

const UserList: React.FC<IProps> = (props) => {
  const [user, setUser] = useState<IUsers[]>(UserServices.getAllUsers());

  const clickButton = (user: IUsers) => {
    // alert(JSON.stringify(user));
    props.reciveUserList(user);
  };
  return (
    <>
      <table className='table table-hover text-center table-striped shadow-lg'>
        <thead className='bg-dark text-white sticky-top'>
          <tr className=''>
            <th>SNO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((user, index) => {
              return (
                <tr key={index} onClick={() => clickButton(user)}>
                  <td>{index + 1}</td>
                  <td>
                    {user.name.first}
                    {user.name.last}
                  </td>
                  <td>{user.dob.age}</td>
                  <td>{user.email}</td>
                  <td>{user.location.country}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default UserList;
