import React from "react"
import { NavLink } from "react-router-dom"


export const Menu=()=>{
    return <nav>        
      <button>  <NavLink to="/producer" >כניסת מפיקות</NavLink> <br/></button>
      <button>  <NavLink to="/users"> כניסת משתמשים </NavLink></button>
    </nav>
}