import React, { Component } from 'react';
import "./Profile.css";
import { postService } from './../../service/postService';
import { url } from "./../../shares/constans"

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: '',
            user: null
        }
    }

    componentDidMount() {
        postService.getProfile(`${url}/api/users/${this.props.match.params.id}`)
            .then(profile => {
                this.setState({
                    profile: profile
                })


            })




    }

    noImage = () => {
        if (this.state.profile.avatarUrl === '') {
            return (

                <img className="profileImg" src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-hacker-3830b32ad9e0802c-512x512.png" alt="" />
            )
        } else {
            return <img className="profileImg" src={this.state.profile.avatarUrl} alt="" />
        }

    }

    render() {
        const profile = this.state.profile;
        // console.log(profile);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        {/* <img className="profileImg" src={profile.avatarUrl} alt="" /> */}
                        {this.noImage()}
                        <h1 className="profileName">{profile.name}</h1>
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

export default Profile;
