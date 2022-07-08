import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import Search_icon from "./Search_icon.svg";
import Menu_button from "./Menu_button.svg";

export class Navbar extends Component {

    render() {
        let { title } = this.props
        return (
            // <nav className="navbar sticky-md-top navbar-expand-lg">
            //     <div className="container-fluid">
            //         <Link className="navbar-brand" to="/">{title}</Link>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //                 <li className="nav-item d-flex">
            //                     <NavLink className="nav-link" to="technology">Technology</NavLink>
            //                 </li>
            //                 <li className="nav-item d-flex">
            //                     <NavLink className="nav-link" to="science">Science</NavLink>
            //                 </li>
            //                 <li className="nav-item d-flex">
            //                     <NavLink className="nav-link" to="sports">Sports</NavLink>
            //                 </li>
            //                 <li className="nav-item d-flex">
            //                     <NavLink className="nav-link" to="health">Health</NavLink>
            //                 </li>
            //                 <li className="nav-item d-flex">
            //                     <NavLink className="nav-link" to="entertainment">Entertainment</NavLink>
            //                 </li>
            //             </ul>
            //             <form className="d-flex" role="search">
            //                 <input className="form-control me-2 px-4 rounded-5" type="search" placeholder="Search" aria-label="Search" />
            //                 <button className="btn btn-outline-primary px-4 rounded-5" type="submit">Search</button>
            //             </form>
            //         </div>
            //     </div>
            // </nav>
            <div className="navContainer">

                <div className="navbar">
                    <div className="leftDiv">
                        <img src={Menu_button} alt="Search" onClick={() => { console.log("menuButton pressed") }} className="menuButton" />
                        <div className="seprater"></div>
                        <div className="logoNameContainer">
                            <Link id='nameOfApp' to="/">{title}</Link>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="categoriesContainer">
                            <NavLink className="nav-link" to="technology">Technology</NavLink>
                            <NavLink className="nav-link" to="science">Science</NavLink>
                            <NavLink className="nav-link" to="sports">Sports</NavLink>
                            <NavLink className="nav-link" to="health">Health</NavLink>
                            <NavLink className="nav-link" to="entertainment">Entertainment</NavLink>
                        </div>
                        <div className="seprater"></div>
                        <div className="searchBarContainer">
                            <input id='searchBox' type="text" />
                            <button id='searchButton'>Search</button>
                            <img src={Search_icon} alt="Search" onClick={() => { console.log("helllow") }} className="searchIcon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar