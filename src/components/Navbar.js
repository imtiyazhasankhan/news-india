import React, { Component } from 'react'

export class Navbar extends Component {
    
    render() {
        let { title, category } = this.props
        return (
            <nav className="navbar sticky-md-top navbar-expand-lg">
                <div className="container-fluid cntfld">
                    <a className="navbar-brand" href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Catagory
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <button className="dropdown-item" onClick={category}>Khushi</button>
                                    <a className="dropdown-item" href="/">Politics</a>
                                    <a className="dropdown-item" href="/">Cricket</a>
                                    <a className="dropdown-item" href="/">Technology</a>
                                    <a className="dropdown-item" href="/">Top Headlines</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 px-4 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary px-4 rounded-5" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar