import React, { useState } from "react";
import UserList from "./UserList";
import UserCard from "./UserCard";
import { IUsers } from "../Models/IUsers";

const UserManager: React.FC = () => {
  const [user, setUser] = useState<IUsers>({} as IUsers);
  const reciveUserList = (user: IUsers): void => {
    setUser(user);
  };
  return (
    <>
      <div className='container mt-5 '>
        <div className='row'>
          <div className='col'>
            <p className='h3 text-success'>UserManager</p>
            <p className='fst-italic'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              corrupti deserunt quibusdam enim consectetur nisi? Laudantium
              error ex adipisci mollitia repudiandae inventore libero, dicta
              modi, nemo molestiae impedit accusamus totam corporis similique.
            </p>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-8'>
            <UserList reciveUserList={reciveUserList} />
          </div>
          <div className='col-sm-4'>
            <UserCard user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserManager;
