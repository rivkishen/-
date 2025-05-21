import React from "react"
import { NavLink } from "react-router"

export const ProducerMenu=()=>{
    return (
        <div>
            
    <NavLink to="/AddProducer"><button>הוספת מפיקה</button> </NavLink> <br/>
   <NavLink to="/ChekProducer">  <button>   מפיקה קיימת </button></NavLink>
   </div> 
   )
}