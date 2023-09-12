import React, { useState } from "react";
import ChildCard from "./ChildCard";
const ParentCard = () => {
  const [pText, setPText] = useState<string>("");
  const [cmsg, setCmsg] = useState<string>("");

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPText(event.target.value);
  };
  return (
    <>
      <pre>{pText}</pre>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header bg-info'>
                <form>
                  <input
                    type='text'
                    value={pText}
                    onChange={(event) => updateInput(event)}
                    placeholder='Parent Text'
                    className='form-control'
                  />
                </form>
              </div>
              <div className='card-body bg-info'>
                <p> From Child : {cmsg} </p>
                <ChildCard text={pText} setCMsg={setCmsg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentCard;
