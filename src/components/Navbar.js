import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import Search_icon from "./Search_icon.svg";
import Menu_button from "./Menu_button.svg";

export class Navbar extends Component {
    
    constructor() {
        super()
        this.state = ({
            searchUrlTo: "/"
        })
    }

    async componentDidMount() {
        let searchBox = document.getElementById("searchBox")
        searchBox.onchange = () => {
            let kyaNaamDu = `${document.getElementById("searchBox").value}`
            let removedSpace = kyaNaamDu.replace(/\s/g,'')
            this.setState({
                searchUrlTo: removedSpace
            })
        }
    }

    render() {
        let { title, searchFunction, onChngFncSrchbr } = this.props

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
                        <img src={Menu_button} alt="Search" className="menuButton" />
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
                            {/* <NavLink className="nav-link" to={userSearch}>{userSearch}</NavLink> */}
                        </div>
                        <div className="seprater"></div>
                        <div className="searchBarContainer">
                            <img id='searchIcon' src={Search_icon} alt="Search" onClick={openSearchBar} className="searchIcon" />
                            <input id='searchBox' placeholder='eg: linux, elon musk, delhi' type="text" onChange={onChngFncSrchbr} />
                            {/* <button id='searchButton' onClick={searchFunction} >Search</button> */}
                            <Link id='searchButton' onClick={searchFunction} to={`${this.state.searchUrlTo}`}>Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
