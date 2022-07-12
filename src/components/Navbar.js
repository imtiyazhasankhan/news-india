import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import Search_icon from "./Search_icon.svg";
import Menu_button from "./Menu_button.svg";

export class Navbar extends Component {

    render() {
        let { title, searchFunction } = this.props

        let openSearchBar = () => {
            console.log("openSearchBar ")
            document.getElementById("navMenus").style.display = "none"
            document.getElementById("searchBox").style.display = "block"
            document.getElementById("searchButton").style.display = "block"
            document.getElementById("searchIcon").style.marginRight = "12px"
        }
        
        return (
            <div className="navContainer">

                <div className="navbar">
                    <div className="leftDiv">
                        <img src={Menu_button} alt="Search" onClick={searchFunction} className="menuButton" />
                        <div className="seprater"></div>
                        <div className="logoNameContainer">
                            <Link id='nameOfApp' to="/">{title}</Link>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div id='navMenus' className="categoriesContainer">
                            <NavLink className="nav-link" to="technology">Technology</NavLink>
                            <NavLink className="nav-link" to="science">Science</NavLink>
                            <NavLink className="nav-link" to="sports">Sports</NavLink>
                            <NavLink className="nav-link" to="health">Health</NavLink>
                            <NavLink className="nav-link" to="entertainment">Entertainment</NavLink>
                        </div>
                        <div className="seprater"></div>
                        <div className="searchBarContainer">
                            <img id='searchIcon' src={Search_icon} alt="Search" onClick={openSearchBar} className="searchIcon" />
                            <input id='searchBox' placeholder='eg: delhi, india, covid' type="text" />
                            <button id='searchButton'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar