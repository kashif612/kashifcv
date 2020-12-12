import React from 'react'
import { NavLink } from 'react-router-dom';

const nav = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
        <div className="container">
        <div className="navbar_container">
        <ul className= "navbar_left">
            <div className="navbar_left-log">
                <h1>Kashif.Iqbal</h1>
            </div>
        </ul>
        { state ?   <ul className="navbar_right">
            <li><NavLink to="/">Home</NavLink>
            </li>
            <li><NavLink to="">Services</NavLink></li> 
            <li><NavLink to="">About</NavLink></li>
            <li><NavLink to="">Skills</NavLink></li>
            <li><NavLink to="">Portfolio</NavLink></li>
            <li><NavLink to="">Blog</NavLink></li>
            <li><NavLink to="">Contact</NavLink></li>

        </ul> : '' }
      


        </div>
        
        </div>   
        <div className="toggle" onClick={()=> setState(!state)}>X</div> 
        </nav>
    )
}

export default nav
 