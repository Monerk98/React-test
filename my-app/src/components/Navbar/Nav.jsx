import React from 'react';
import classes from './Nav.module.css'
import v from '../var.module.css'
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className = {classes.nav}>
        <ul className="containerUl"> 
          <li className={classes.listMain}>
              <NavLink to="/profile" className={`${classes.linkContent} ${v.list}`}>Profile</NavLink></li>
          <li className={classes.listMain}>
              <NavLink to="/dialogs" className={`${classes.linkContent} ${v.list}`}>Home</NavLink></li>  
          <li className={classes.listMain}>
              <NavLink to="/about" className={`${classes.linkContent} ${v.list}`}>About</NavLink></li>    
         </ul> 
     </nav>
    )
}

export default Nav