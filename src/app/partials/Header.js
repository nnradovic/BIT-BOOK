import React from 'react'
const Header = () => {
    return (
        <div className="container-fluid">
            {/* <div className="container"> */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand text-white" href="#">Bitbook</a>
                    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="float-right">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="#">Feed </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">People</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            {/* </div > */}
        </div>
    )
}
export default Header;