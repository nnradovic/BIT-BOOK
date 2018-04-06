import React, { Component } from 'react'
// import './Login.css'
import { authenticationService } from '../../service/RegisterLoginService'

import "./Buttons.css";



import { withRouter, Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    loginProfile = () => {
        authenticationService.login(this.state.username, this.state.password)
            .then((response) => {
                return response.json();
            }).catch((error) => console.info(error))

            .then(response => {
                if (response.sessionId !== undefined) {
                    authenticationService.succsesfullLogin(response.sessionId)
                } else {
                    alert("Invalid username or password")
                }
                return response;
            })
            .then((r) => r).then(() => this.props.history.push('/'))
    }
    render() {
        return (

            <div>
                <label htmlFor="username">Username</label><input onChange={this.handleInputChange} name="username" type="text" placeholder="User Name" /><br />
                <label htmlFor="password">Password</label><input onChange={this.handleInputChange} name="password" type="password" placeholder="Min 6 characters" />
                <button className="form-control btnLoginB" onClick={this.loginProfile}>Login</button>
            </div>

        )
    }
}

export default withRouter(Login)