import React from "react"
import './MyCard.css'

const MyCard =(props)=>{
   
    return (
        <>
             <div className="card shadow-lg">
                            <img src={props.imgUrl} alt="#" />
                            <div className="card-body">
                                <h4 className="card-title">{props.Name}</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit dignissimos, tenetur reprehenderit, rem tempore corporis a dolore fugit, culpa aperiam? Eum, tempore.</p>
                            </div>
                        </div>
          
        </>
    )
}
export default MyCard;