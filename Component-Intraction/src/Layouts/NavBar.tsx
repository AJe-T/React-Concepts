import React from "react";
interface IProps {
  heading: string;
  color: string;
}
const Navbar: React.FC<IProps> = (props) => {
  console.log(props);
  return (
    <>
      <nav className={`navbar ${props.color}`}>
        <div className='container '>
          <p className='h3 text-white '>{props.heading}</p>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
