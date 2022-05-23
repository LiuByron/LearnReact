import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about') // 重定向
  // }, 2000)
  return (
    <nav className="nav-wrapper cyan darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">LOGO</Link>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><Link to="/content">Content</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);