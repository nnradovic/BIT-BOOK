import React, { Component } from 'react'
// import './Register.css'
import { authenticationService } from '../../service/RegisterLoginService'
import { withRouter } from 'react-router-dom'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            name: "",
            email: "",
            password: "",
            value: "",
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


    registerProfile = (event) => {
        authenticationService.register(this.state.username, this.state.name, this.state.email, this.state.password)

        const type = event.target.id;

        this.setState({
            value: type
        })

        this.props.onCreatePost(type)
    }





    render() {
        return (
            <div>
                <div>
                    <label htmlFor="username">Username</label><input onChange={this.handleInputChange} name="username" type="text" placeholder="User Name" /><br />
                    <label htmlFor="name">Name</label><input onChange={this.handleInputChange} name="name" type="text" placeholder="Full Name" /><br />
                    <label htmlFor="login">Email Address</label><input onChange={this.handleInputChange} name="email" type="email" placeholder="Email Address" /><br />
                    <label htmlFor="password">Password</label><input onChange={this.handleInputChange} name="password" type="password" placeholder="Min 6 characters" />


                </div>

                <button id="login-tab" className="form-control btnLoginB" onClick={this.registerProfile}>Register</button>
            </div>

        )
    }
}


export default withRouter(Register)