import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">

      

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
               
              <Link className="nav-link " to="/">
                ADD REGISTRATION
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/delete">
                DELETE REGISTRATION
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link " to="/view">
                VIEW REGISTRATION
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/search">
                SEARCH REGISTRATION
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavigationBar