import React, { Fragment } from 'react';
import './image.css'
import { url, textUrlGet, imageUrlSingle, commentUrl, usersUrl } from "./../../shares/constans"
import { postService } from "./../../service/postService";
import "./ImageViewSingle.css";
import Comment from "./Comment";

class ImageViewSingle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            comments: [],
            user:[]
        }
    }
    componentDidMount() {
        postService.getSingleImagePosts(`${url}${imageUrlSingle}${this.props.match.params.id}`)
            .then(image => {
                this.setState({
                    image: image
                })
                return image;
            })
        postService.getComments(`${url}${commentUrl}${this.props.match.params.id}`)
            .then(comments => {
                console.log(comments);
                this.setState({
                    comments: comments
                })
            })
        postService.getUsers(`${url}${usersUrl}${this.props.match.params.id}`)
            .then(user => {
                console.log(user);
                this.setState({
                   user: user
                })
            })

    }


    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="card imageCard">
                                <img className="card-img-top" src={this.state.image.imageUrl} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text videoPost">{this.state.image.type} Post</p>
                                    <p className="card-text comment">{this.state.image.commentsNum} Comments</p>
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

                                    <Comment key={comment.id} data={comment} user={this.state.user}/>
                    
                                )
                            })}

                            <br />

                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }
}
export default ImageViewSingle;
