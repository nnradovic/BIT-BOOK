import React, { Fragment } from 'react';
import './SinglePost.css'
import { url, textUrlGet, imageUrlSingle, videoUrlSingle, commentPost, textUrlSingle, commentUrl, usersUrl, TYPES, headers, headers1 } from "./../../shares/constans"
import { postService } from "./../../service/postService";
import Comment from "./../postFeed/Comment";
import PostContent from './../postFeed/PostContent';


class SinglePost extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            postItem: '',
            comments: [],
            newComment: "",

        }


    }


    componentDidMount() {
        if (this.props.match.params.type === TYPES.VIDEO) {

            //VIDEO
            postService.getSingleVideoPosts(`${url}${videoUrlSingle}${this.props.match.params.id}`)
                .then(video => {

                    this.setState({
                        postItem: video
                    })

                }).catch(err => this.props.history.push('/post'))

        } else if (this.props.match.params.type === TYPES.TEXT) {
            // TEXT
            postService.getSingleTextPosts(`${url}${textUrlSingle}${this.props.match.params.id}`)
                .then(text => {
                    this.setState({
                        postItem: text
                    })

                }).catch(err => this.props.history.push('/post'))
        } else {
            // IMAGE
            postService.getSingleImagePosts(`${url}${imageUrlSingle}${this.props.match.params.id}`)
                .then(image => {
                    this.setState({
                        postItem: image
                    })

                }).catch(err => this.props.history.push('/post'))

        }

        //ALL
        this.loadComments();




    }

    loadComments = () => {
        postService.getComments(`${url}${commentUrl}${this.props.match.params.id}`)
            .then(comments => {

                this.setState({
                    comments: comments,
                    newComment: ""
                })

            })


    }

    handleChange = (e) => {
        this.setState({
            newComment: e.target.value,
        })
    }

    postComment = (e) => {
        e.preventDefault()
        return fetch(`${url}${commentPost}`, {
            method: "POST",
            body: JSON.stringify({
                "postId": this.props.match.params.id,
                "body": this.state.newComment,
                "authorId": this.state.postItem.userId,
                "authorName": this.state.postItem.userDisplayName
            }),
            headers: {
                ...headers1,
                "SessionId": sessionStorage.getItem("sessionId")
            }
        }).then(() => this.loadComments())
    }


    deletePost = (e) => {
        e.preventDefault()

        return fetch(`http://bitbookapi.azurewebsites.net/api/Posts/${this.props.match.params.id}`, {
            method: "DELETE",
            headers: {
                ...headers1,
                "SessionId": sessionStorage.getItem("sessionId")
            }
        }).catch((error) => console.info(error))

            .then(() => {

                this.props.history.push('/post');
                // window.location.href = "#/posts";
            })
    }



    btnDisabled = () => {
        if (this.state.newComment === "") {
            return (
                <button className="btn btnSend" type="button" disabled>SEND</button>
            )
        } else {
            return <button className="btn btnSend" onClick={this.postComment} type="button">SEND</button>
        }

    }
    render() {


        return (

            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="card text">
                                <div className="card-body">
                                    <div className="divDelete">
                                        <button type="button " className="btn btn-outline-secondary btnDelete " onClick={this.deletePost}>Delete</button>
                                    </div>
                                    <div className="postan">
                                        <PostContent post={this.state.postItem} key={this.state.postItem.id} />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <input onChange={this.handleChange} type="text" name="newComment" value={this.state.newComment} className="form-control" placeholder="Add your comment .." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    {this.btnDisabled()}
                                </div>
                            </div>

                            {this.state.comments.map((comment) => {
                                return (
                                    <div key={comment.id}>
                                        <Comment data={comment} />
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Fragment >
        )

    }
}
export default SinglePost;