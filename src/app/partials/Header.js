import React from 'react'
import { Link } from 'react-router-dom'
import { authenticationService } from '../../service/RegisterLoginService'
import "./Header.css"
const Header = () => {

    return (
        <div className="container-fluid">

            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" >    <span className="navbar-brand text-white logo"><i className="ion-planet"></i> Bitbook</span> </Link>
                <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="float-right">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active"><Link className="link" to="/">
                                <span className="nav-link text-white navMenu"> <i className="ion-ios-list"></i> Feed </span></Link>
                            </li>
                            <li className="nav-item"><Link className="link" to="/people">
                                <span className="nav-link text-white navMenu" > <i className="ion-person-stalker"></i> People</span>
                            </Link></li>

                            <li className="nav-item"><Link className="link" to="/profile" >
                                <span className="nav-link text-white navMenu" ><i className="ion-android-person"></i> Profile</span></Link>
                            </li>


                            <li className="nav-item"><Link className="link" to="/login">
                                <span onClick={authenticationService.logout} className="nav-link text-white navMenu" ><i className="ion-ios-download-outline"></i> Logout</span>  </Link>
                            </li>



                        </ul>
                    </div>
                </div>

            </nav>

        </div >
    )

}
export default Header;