import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar  bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Dashboard</a>
            <div className="flex" id="navbarText">
                <ul className="flex flex-row gap-2 navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/stock">Estoque</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/financial">Financeiro</Link>
                    </li>
                </ul>
            </div>
            <span className="navbar-text">
            Navbar text with an inline element
        </span>
        </div>
    </nav>
  );
}

export default Navbar;