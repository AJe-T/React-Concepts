import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  const decr = () => {
    setCount(count - 1 > 0 ? count - 1 : 0);
  };
  const incrBy = (value) => {
    setCount(count + value);
  };
  const decrBy = (value) => {
    setCount(count - value > 0 ? count - value : 0);
  };
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-body'>
                <p className='h1'>{count}</p>
                <button className='btn btn-primary me-2' onClick={incr}>
                  Increment
                </button>
                <button className='btn btn-danger' onClick={decr}>
                  Decrement
                </button>
                <button
                  className='btn btn-primary m-2'
                  onClick={() => incrBy(5)}
                >
                  Increment by 5
                </button>
                <button className='btn btn-danger' onClick={() => decrBy(5)}>
                  Decrement by 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
