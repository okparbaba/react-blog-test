import React from 'react';
import {Link} from 'react-router-dom';
const Nav=()=>{
    return(

        <header>
            {/* Navbar */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
            <div className="container">
                {/* Brand */}
                
                <Link className="navbar-brand waves-effect" to="/">
                <strong className="blue-text">MDB</strong>
                </Link>
                {/* Collapse */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Left */}
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link waves-effect" href="#">Home
                        <span className="sr-only">(current)</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link waves-effect"
                     to="/article/create">Create Article</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link waves-effect"
                    to="/user/login">
                        Login
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link waves-effect"
                    to="/user/register">
                        Register
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free
                        tutorials</a>
                    </li>
                </ul>
                {/* Right */}
                <ul className="navbar-nav nav-flex-icons">
                    <li className="nav-item">
                    <a href="https://www.facebook.com/mdbootstrap" className="nav-link waves-effect" target="_blank">
                        <i className="fab fa-facebook-f" />
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="https://twitter.com/MDBootstrap" className="nav-link waves-effect" target="_blank">
                        <i className="fab fa-twitter" />
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded waves-effect" target="_blank">
                        <i className="fab fa-github mr-2" />MDB GitHub
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
             
    );
}
export default Nav;