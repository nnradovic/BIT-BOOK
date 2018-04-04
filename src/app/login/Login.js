import React ,{ Component } from 'react'
import'./Register.css'
import {authenticationService} from '../../service/RegisterLoginService'
import {withRouter} from 'react-router-dom'


class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            name:"",
            email:"",
            password:""
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
        authenticationService.login(this.state.username,this.state.name, this.state.email, this.state.password)
        .then((response) => {
           return response.json();
        }).then(response =>{
            authenticationService.succsesfullLogin(response.sessionId)
        })
    }
    render(){
    return(
 
        <div>
        <label htmlFor="username">Username</label><input onChange={this.handleInputChange}  name="username" type="text" placeholder="User Name"/><br/>
        <label htmlFor="name">Name</label><input onChange={this.handleInputChange}  name="name" type="text" placeholder="Full Name"/><br/>
        <label htmlFor="login">Email Address</label><input onChange={this.handleInputChange} name="email" type="email" placeholder="Email Address"/><br/>
        <label htmlFor="password">Password</label><input onChange={this.handleInputChange} name="password" type="password" placeholder="Min 6 characters"/>
        <button onClick={this.loginProfile}>Login</button>
        </div>
 
    )
}
}

export default withRouter(Login)