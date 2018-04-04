import React ,{Component}from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'
import WelcomeLoginText from './WelcomeLoginText'
import WelcomeRegisterText from './WelcomeRegisterText'
import Register from './Register'
import Login from './Login'
import Buttons from './Buttons'
class WelcomePage extends Component {
constructor(props){
   super(props)
   this.state =({
       value:''
   })
}

onCreatePostClick = (type) => {
    this.setState({ value: type })
}




render(){
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                        <div className="col-6">
                            {(this.state.value === 'register-tab')?< WelcomeRegisterText />:  <WelcomeLoginText />}
                        </div>
                    <div className="col-6">
                       <Buttons onCreatePost={this.onCreatePostClick} />
                        
                        
                        {(this.state.value === 'register-tab')?<Register />:  <Login />}
                        </div>


                    </div>
                </div>
        </Fragment>
            )
        }
    }
        
export default WelcomePage