import React, { useState } from "react";
import "./MyCard.css";

const MyCard = () => {
  const [tours, setTours] = useState([
    {
      sno: "AA001",
      name: "japan",
      imageUrl:
        "https://images.unsplash.com/photo-1579525108311-0c5730b5799d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW4lMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      sno: "AA002",
      name: "singapore",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhb3gh7OzNhaG94MjgAlL0WHoEe41V62OBDmzNe2J&s",
    },
    {
      sno: "AA003",
      name: "canada",
      imageUrl:
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/08/Stanley-Park-e1567324833962.jpg",
    },
    {
      sno: "AA004",
      name: "india",
      imageUrl:
        "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww&w=1000&q=80",
    },
  ]);
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          {tours.map((values, index) => {
            return (
              <div className='col-lg-3' key={index}>
                <div className='card shadow-lg'>
                  <img src={values.imageUrl} alt='card-img' height={200} />
                  <div className='card-body'>
                    <p className='h3'>{values.name}</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis molestias, error sunt deserunt quae non, vel
                      quia cum eaque magni voluptas rerum optio obcaecati
                      recusandae.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MyCard;
