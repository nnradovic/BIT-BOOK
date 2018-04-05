import React, { Component } from 'react';
import "./Profile.css";
import { postService } from './../../service/postService';
import Modal from './Modal'
import { url } from "./../../shares/constans"

class MyProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
        }
    }

    componentDidMount() {
        postService.getProfile(`${url}/api/profile`)
            .then(profile => {
                this.setState({
                    profile: profile
                })

            }).catch((error) => console.info(error))

    }
    getEditedProfile = () => {
        postService.getProfile(`${url}/api/profile`)
            .then(profile => {
                this.setState({
                    profile: profile
                })
            }).catch((error) => console.info(error))

    }

    noImage = () => {
        if (this.state.profile.avatarUrl === undefined) {
            return (

                <img className="profileImg" src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-hacker-3830b32ad9e0802c-512x512.png" alt="" />
            )
        } else {
            return <img className="profileImg" src={this.state.profile.avatarUrl} alt="" />
        }
    }

    render() {
        const profile = this.state.profile;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <img className="profileImg" src={profile.avatarUrl} alt="" />
                        {/* {this.noImage()} */}
                        <h1 className="profileName">{profile.name}</h1>
                        <p className="text-center edit" data-toggle="modal" data-target="#exampleModal">Edit profile</p>

                        <Modal data={profile} data1={this.getEditedProfile} />

                        <p className="profileDes">{profile.aboutShort}</p>
                        <div className="row">
                            <div className="col-6 offset-3">
                                <button type="button " className="btn btn-outline-secondary btnOne"><i className="ion-android-clipboard"></i> {profile.postsCount} Posts</button>
                                <button type="button" className="btn btn-outline-secondary  btnTwo"><i className="ion-ios-compose-outline"></i>{profile.commentsCount} Comments</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile;
