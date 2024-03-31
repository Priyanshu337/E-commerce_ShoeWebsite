import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="#">Wear`e</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className=" navbar-nav ml-auto, mx-auto">
                        <li className="nav-men">
                            <a className="nav-link" href="#">Men <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-women">
                            <a className="nav-link" href="#">Women</a>
                        </li>
                        <li className="nav-profile">
                            <a className="nav-link" href="#" id="nav-prof" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">My Likes</a>
                                <a className="dropdown-item" href="#">My Account</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                    </ul>
                    <form className="search">
                        <input className="searchBar" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav></div>
    )
}
