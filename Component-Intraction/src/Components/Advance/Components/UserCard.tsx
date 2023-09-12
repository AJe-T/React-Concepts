import React from "react";
import { IUsers } from "../Models/IUsers";
interface Iprops {
  user: IUsers;
}
const UserCard: React.FC<Iprops> = (props) => {
  return (
    <>
      {props.user && Object.keys(props.user).length > 0 && (
        <div className='card shadow-lg sticky-top'>
          <div className='card-header text-center'>
            <img src={props.user.picture.large} alt='' />
          </div>
          <div className='card-body text-dark'>
            <ul className='list-group  '>
              <li className='list-group-item'>
                Name :{" "}
                <span className='fw-bold'>
                  {props.user.name.first} {props.user.name.last}
                </span>
              </li>
              <li className='list-group-item'>
                Age : <span className='fw-bold'>{props.user.dob.age}</span>
              </li>
              <li className='list-group-item'>
                Email : <span className='fw-bold'>{props.user.email}</span>
              </li>
              <li className='list-group-item'>
                Phone No : <span className='fw-bold'>{props.user.phone}</span>
              </li>
              <li className='list-group-item'>
                Country :{" "}
                <span className='fw-bold'>{props.user.location.country}</span>
              </li>
              <li className='list-group-item'>
                Gender : <span className='fw-bold'>{props.user.gender}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default UserCard;
