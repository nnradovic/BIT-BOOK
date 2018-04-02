import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {

    return (
        <div className="container-fluid">
            {/* <div className="container"> */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand text-white logo" href="#"><i className="ion-planet"></i> Bitbook</a>
                    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="float-right">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ">
                               <Link to="/"> <li className="nav-item active">
                                    <span className="nav-link text-white navMenu" href=""> <i className="ion-arrow-graph-up-right"></i> Feed </span>
                                </li></Link>
                               <Link to="/people"> <li className="nav-item">
                                    <span className="nav-link text-white navMenu" href=""> <i className="ion-ios-pulse-strong"></i> People</span> 
                                </li></Link>
                                <Link to="/profile" >
                                <li className="nav-item">
                                    <span className="nav-link text-white navMenu" ><i className="ion-android-person"></i> Profile</span>
                                </li>
                            </Link>
                           
                            </ul>
                            </div>
                            </div>
                            </nav>
                            </div>
                            )

}
export default Header;