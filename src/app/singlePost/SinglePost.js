import React, { Fragment } from 'react';
import './SinglePost.css'
import { url, textUrlGet, imageUrlSingle, videoUrlSingle, textUrlSingle, commentUrl, usersUrl } from "./../../shares/constans"
import { postService } from "./../../service/postService";
import Comment from "./../postFeed/Comment";
import PostContent from './../postFeed/PostContent';


class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postItem: '',
            comments: [],

        }
        console.log(props);

    }


    componentDidMount() {
        if (this.props.match.params.type === "video") {
            //VIDEO
            postService.getSingleVideoPosts(`${url}${videoUrlSingle}${this.props.match.params.id}`)
                .then(video => {

                    this.setState({
                        postItem: video
                    })

                })
        } else if (this.props.match.params.type === "text") {
            // TEXT
            postService.getSingleTextPosts(`${url}${textUrlSingle}${this.props.match.params.id}`)
                .then(text => {
                    this.setState({
                        postItem: text
                    })

                })
        } else {
            // IMAGE
            postService.getSingleImagePosts(`${url}${imageUrlSingle}${this.props.match.params.id}`)
                .then(image => {
                    this.setState({
                        postItem: image
                    })

                })
        }

        //ALL
        postService.getComments(`${url}${commentUrl}${this.props.match.params.id}`)
            .then(comments => {
                console.log(comments);
                this.setState({
                    comments: comments
                })
            })
    }



    render() {


        return (

            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="card text">
                                <div className="card-body">
                                    <PostContent post={this.state.postItem} />
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add your comment .." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">SEND</button>
                                </div>
                            </div>
                            {this.state.comments.map(comment => {
                                return (
                                    <div>
                                        <Comment key={comment.id} data={comment} />
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