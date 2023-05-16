import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

let { profile } = window
class Sidebar extends Component {

    render () {
        return(
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            
            <div className="topSpace"></div>
            
            <div className="sidebar">

              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">

                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/dashboard"> 
                      <p> Dashboard </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/play-game"> 
                      <p> Play Game </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile"> 
                      <p> Profile </p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/leaderboard"> 
                      <p> Leaderboard </p>
                    </NavLink>
                  </li>
                </ul> 
              </nav>

              <nav className="logOutNav">
                  <ul className="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                      <a className="logout_link" href="/admin/logout"> 
                        <i className="nav-icon fa fa-sign-out"></i>
                          <p className="nav-text" >Logout</p>
                      </a>
                    </li>
                  </ul>
                </nav>

            </div>
          </aside>
        )
    }

}

export default Sidebar