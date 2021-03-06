import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';

export default function NavBar(props) {
    return (
        <div className="navBar">
            <Link to="/jikan-api-front/"><Logo/></Link>
            <SearchBar/>
        </div>
    )
}