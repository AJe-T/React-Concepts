import React from "react";
const Navbar=(props)=>{
    console.log(props)
    return (
        <>
        <nav className={`navbar ${props.color}`}>
            <div className="container-fluid">
              <h3>State</h3>
            </div>
        </nav>
        </>
    )
}
export default Navbar;