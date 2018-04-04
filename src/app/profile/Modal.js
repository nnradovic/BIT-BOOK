import React from 'react'
import {Component} from 'react'
import {editProfile} from '../../service/EditProfile'
import MyProfile from './MyProfile'

class Modal extends Component {
    constructor(props){
        super(props)
        this.state={
           image:'',
            userName:"",
            userDescription:'',
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

    updateProfile = () => {
        editProfile.edit(this.state.userName,this.state.userDescription, this.state.image,this.props.data.userId, this.props.data.about, this.props.data.email)
        .then(response =>{
            this.props.data1()
        })
    }
   

    render(){
    return (
        <div className="modal" tabIndex="-1" id="exampleModal" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <input type="text" name="image" placeholder="Image url" onChange={this.handleInputChange} className="float-left"   />
                        
                        <input onChange={this.handleInputChange} name="userName"  className="name float-right" type="text" placeholder="Full Name"/>
                        <input onChange={this.handleInputChange} name="userDescription" className="user-description mt-4"  type="text" placeholder="User Description"/>

                    </div>
                            <div className="modal-footer">
                                <button onClick={this.updateProfile} type="button" data-dismiss="modal" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                </div>
                    </div>
                </div>
                )
            }
            }
            
export default Modal