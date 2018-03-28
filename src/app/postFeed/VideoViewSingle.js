import React, { Fragment } from 'react';
import './video.css'
import { url, textUrlGet, videoUrlSingle, commentUrl } from "./../../shares/constans"
import { postService } from "./../../service/postService";
import Comment from "./Comment";


class VideoViewSingle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            video: '',
            comments: []
        }
    }
    componentDidMount() {
        postService.getSingleVideoPosts(`${url}${videoUrlSingle}${this.props.match.params.id}`)
            .then(video => {
                console.log(video);
                this.setState({
                    video: video
                })
               
            })

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
                      <br/>
                        <div className="card ">
                    <div className="pad">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="420" height="315" src={this.state.video.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <div className="card-body">
                            <p className="card-text videoPost">{this.state.video.type} Post</p>
                            <p className="card-text comment">{this.state.video.commentsNum} Comments</p>
                        </div>
                    </div>
                        </div>
                                <br/>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add your comment .." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">SEND</button>
                                </div>

                            </div>
 </div>
 </div>
                          {this.state.comments.map(comment => {
                                return (
                                     <div>
                                    <Comment key={comment.id} data={comment}/>
                                    <br />
                                    </div>
                                )
                                                                
                            })} 
                            <br />
                        </div>
                    
        
            </Fragment>
        )

    }
}
export default VideoViewSingle;