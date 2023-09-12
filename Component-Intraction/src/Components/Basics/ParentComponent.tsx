import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [msg, setMsg] = useState<string>("This is a parent data");
  const [cText, setCText] = useState<string>("");

  const updateChildText = (msg: string): void => {
    setCText(msg);
  };
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card bg-primary text-white'>
              <div className='card-body'>
                <p>{msg}</p>
                <p>From Child : {cText}</p>
                <ChildComponent text={msg} send={updateChildText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentComponent;
