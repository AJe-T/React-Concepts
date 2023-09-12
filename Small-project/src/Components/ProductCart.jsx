import React, { useState } from "react";
import { ProductServices } from "../Services/ProductServices";
const ProductCart = () => {
  const [watchs, setWatchs] = useState(ProductServices.getAllProducts());
  const incr = (ProductId) => {
    const p = watchs.map((watch) => {
      if (watch.id === ProductId) {
        return {
          ...watch,
          qty: watch.qty + 1,
        };
      }
      return watch;
    });
    setWatchs(p);
  };
  const decr = (ProductId) => {
    const p = watchs.map((watch) => {
      if (watch.id === ProductId) {
        return {
          ...watch,
          qty: watch.qty - 1 > 0 ? watch.qty - 1 : 1,
        };
      }
      return watch;
    });
    setWatchs(p);
  };

  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <p className='h2 text-bg-info'> Watch Cart</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              totam sapiente voluptatum maiores sequi dolorem sit omnis
              consectetur quasi voluptas, dolore ipsum nemo qui accusamus dolor,
              ab expedita deserunt libero pariatur. Omnis!
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <table className=' table table-striped table-hover shadow-lg'>
              <thead className='bg-light text-dark'>
                <tr>
                  <th>SNO</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>qty</th>
                  <th>Unit Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {watchs.map((watch, index) => {
                  return (
                    <tr key={index}>
                      <td>{watch.id}</td>
                      <td>
                        <img
                          src={watch.imageUrl}
                          alt=''
                          width={50}
                          height={50}
                        />
                      </td>
                      <td>{watch.price}</td>
                      <td>
                        <button className='btn'>
                          <i
                            onClick={() => incr(watch.id)}
                            class='bi bi-plus-circle-fill me-2'
                          ></i>
                        </button>

                        {watch.qty}
                        <button className='btn'>
                          <i
                            onClick={() => decr(watch.id)}
                            class='bi bi-dash-circle-fill ms-2'
                          ></i>
                        </button>
                      </td>
                      <td>{watch.price * watch.qty}</td>
                      <td>
                        <button className='btn btn-danger'>
                          <i class='bi bi-trash-fill'></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCart;
