import React, { useState } from "react";
interface IProps {
  text: string;
  setCMsg: any;
}

const ChildCard: React.FC<IProps> = (props) => {
  const [cText, setCText] = useState<string>("");

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCText(event.target.value);
    props.setCMsg(event.target.value);
  };
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <pre>{cText}</pre>
              <div className='card-header bg-success'>
                <form>
                  <input
                    type='text'
                    value={cText}
                    onChange={(event) => updateInput(event)}
                    placeholder='Child Text '
                    className='form-control'
                  />
                </form>
              </div>
              <div className='card-body bg-success'>
                <p>From Parent : {props.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChildCard;
