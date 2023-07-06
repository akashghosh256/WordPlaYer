import React from 'react'
import {NavLink} from "react-router-dom";

function Footer(props) {
  return (
    <div>
           <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }} >
    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 wordplayer, Inc</p>

    
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink>
              </li>
     
    </ul>
  </footer>
    </div>
  )
}

export default Footer 