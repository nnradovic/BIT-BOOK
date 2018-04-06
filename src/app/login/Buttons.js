import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    handleState = (event) => {
        const type = event.target.id;

        this.setState({
            value: type,
        })

        this.props.onCreatePost(type)
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs" id="myTab" >
                    <li className="nav-item">
                        <a onClick={this.handleState} className="nav-link btnLogin" id="login-tab" data-toggle="tab" href="#login" onClick={this.handleState} role="tab" aria-controls="login" aria-selected="false">Login</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleState} className="nav-link btnLogin" id="register-tab" data-toggle="tab" href="#register" onClick={this.handleState} role="tab" aria-controls="register" aria-selected="false">Register</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Buttons