import React from 'react'
import { Component } from 'react'
import { postService } from '../../service/postService'
import { singleProfile } from '../../shares/constans'
import Utils from "../../shares/utils"

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            userDescription: '',
            image: '',
            about: '',
            email: "",
        }
    }
    componentDidMount = () => {

    }

    componentWillReceiveProps = (props) => {
        this.setState({
            userName: props.data.name,
            userDescription: props.data.aboutShort,
            image: props.data.avatarUrl,
            about: props.data.about,
            email: props.data.email,
        })
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
        postService.editProfile(singleProfile, this.state.userName, this.state.userDescription, this.state.image, this.state.about, this.state.email)
            .then(response => {
                console.log(response);
                this.props.data1()
            }).catch((error) => console.log(error))

    }
    checkProfileImgUrl = () => {
        return Utils.validateProfileImage(this.state.image,this.updateProfile)
       }


    render() {
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

                            <input type="text" name="image" placeholder="Image url" onChange={this.handleInputChange} className="float-left" />

                            <input onChange={this.handleInputChange} name="userName" className="name float-right" type="text" placeholder="Full Name" />
                            <input onChange={this.handleInputChange} name="userDescription" className="user-description mt-4" type="text" placeholder="User Description" />

                        </div>
                        <div className="modal-footer">
                        {this.checkProfileImgUrl()}
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal