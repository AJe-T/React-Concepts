import React, { useState } from "react";
interface Iprops {
  text: string;
  send: (msg: string) => void;
}
const ChildComponent: React.FC<Iprops> = (props) => {
  const [msg, setMsg] = useState<string>("This is a child data");
  const clickButton = () => {
    props.send(msg);
  };

  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <div className='card bg-danger'>
              <div className='card-body'>
                <p>{msg}</p>
                <p>From Parent : {props.text}</p>
                <button className='btn btn-success' onClick={clickButton}>
                  click
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChildComponent;
