import React, { Component } from 'react';
import "./Profile.css";
import { postService } from './../../service/postService';
import { url, textUrlGet, textUrlSingle, commentUrl, usersUrl, singleUser } from "./../../shares/constans"

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: ''
        }
    }

    componentDidMount() {
        postService.getProfile(`${url}${singleUser}`)
            .then(profile => {
                this.setState({
                    profile: profile
                })

            })




    }


    render() {
        const profile = this.state.profile;
        console.log(profile);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <img className="profileImg" src={profile.avatarUrl} alt="" />
                        <h1 className="profileName">{profile.name}</h1>
                        <p className="profileDes">{profile.aboutShort}</p>
                        <div className="row">
                            <div className="col-6 offset-3">
                                <button type="button " className="btn btn-outline-secondary btnOne"><i className="ion-android-clipboard"></i> Posts</button>
                                <button type="button" className="btn btn-outline-secondary  btnTwo"><i className="ion-ios-compose-outline"></i>Comments</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
