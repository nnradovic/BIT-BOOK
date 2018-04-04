import React, {Component} from 'react'
import'./Register.css'
import {authenticationService} from '../../service/RegisterLoginService'
import {withRouter} from 'react-router-dom'


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            name:"",
            email:"",
            password:"",
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
    registerProfile = () => {
        authenticationService.register(this.state.username,this.state.name, this.state.email, this.state.password)
        .then(() => {
            this.props.history.push("/")
        })
    }



    render(){
    return(

  <div>
        <label htmlFor="username">Username</label><input onChange={this.handleInputChange}  name="username" type="text" placeholder="User Name"/><br/>
        <label htmlFor="name">Name</label><input onChange={this.handleInputChange}  name="name" type="text" placeholder="Full Name"/><br/>
        <label htmlFor="login">Email Address</label><input onChange={this.handleInputChange} name="email" type="email" placeholder="Email Address"/><br/>
        <label htmlFor="password">Password</label><input onChange={this.handleInputChange} name="password" type="password" placeholder="Min 6 characters"/>
    
        <button onClick={this.registerProfile}>Register</button>
     </div>

    )
}
}


export default withRouter(Register)