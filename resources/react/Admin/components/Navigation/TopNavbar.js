import React, { Fragment } from 'react'

const TopNavbar=()=> {
  return(
    <Fragment>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
          </li>
        </ul>

        <a href="/dashboard" className="brand-link">
          <span className="brand-text font-weight-light" style={{fontSize: '16px', fontWeight: 500}}></span>
          <img src="/assets/images/logo.png" alt="admin" width="160px"/>
        </a>
      </nav>
  </Fragment>
  )
}

export default TopNavbar