import React from 'react';
import { Link } from 'react-router-dom';
import "./PostList.css";
import PostContent from './PostContent'
import PostInfo from './PostInfo'



class PostItem extends React.Component {
    // constructor(props) {
    //     super(props)
    // }



    deletePost = (e) => {
        e.preventDefault()

        return fetch(`http://bitbookapi.azurewebsites.net/api/Posts/${this.props.post.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Key": "3E09CF9",
                "SessionId": sessionStorage.getItem("sessionId")
            }
        }).then(() => this.props.onPostDelete())
            .catch((error) => console.info(error))

    }

    render() {
        return (
            <Link to={`/post/${this.props.post.type}/${this.props.post.id}`} style={{ textDecoration: 'none' }}>
                <div className="card text">
                    <div className="card-body">
                        <div className="btnDeleteDiv">
                            <button type="button " className="btn btn-outline-secondary  btnDelete" onClick={this.deletePost}><i className="ion-android-delete"></i> Delete</button>
                        </div>
                        <div className="postContent">
                            <PostContent post={this.props.post} />
                        </div>
                        <div className="card-body postInfo">
                            <PostInfo post={this.props.post} />
                        </div>
                    </div>
                </div>
            </Link >
        )
    }
}

export default PostItem;
