import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import CreateNewPost from '../newpost/CreateNewPost'
import "./PostList.css";

import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans"
class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: "",
            posts:[]
        }
    }

    handleState = (event) => {
        this.setState({
            btn: event.target.id
        })
    }

    
    // render() {
    //     console.log(this.state.showModal)
    //         posts: []
    //     }
    // }
    componentDidMount() {
        postService.getPosts(`${url}${textUrlGet}`)
            .then(postList => {
                this.setState({
                    posts: postList
                })
            })
    }

    getPostsAgain = () => {
        postService.getPosts(`${url}${textUrlGet}`)
        .then(postList => {
            this.setState({
                posts: postList
            })
        })
    }

    render() {
        const posts = this.state.posts;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1">
                           

                            <div class="menu pmd-floating-action" role="navigation">
                               
                                <a href="javascript:void(0);" onClick={this.handleState} id="post" data-toggle="modal" data-target="#exampleModal" class="btn3 btn-info btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Post">
                                   
                                    
                                </a>
                                <a href="javascript:void(0);" onClick={this.handleState} id="image" data-toggle="modal" data-target="#exampleModal" className="btn2 btn-success btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Image">
                                    
                                </a>
                                <a href="javascript:void(0);" onClick={this.handleState} id="video" data-toggle="modal" data-target="#exampleModal" class=" btn1 btn-danger btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Video">
                                   
                                </a>
                                <a class="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-primary" data-title="Add Post" href="javascript:void(0);">
                                    <span class="pmd-floating-hidden">Primary</span>
                                    <i class="material-icons pmd-sm">add</i>
                                </a>
                            </div>

                            <CreateNewPost data={this.state.btn} getPosts={this.getPostsAgain} />

                            {posts.map(post => {
                                if (post.type === 'Video') {
                                    return <VideoView key={post.id} data={post} />
                                } else if (post.type === 'Image') {
                                    return <ImageView key={post.id} data={post} />
                                } else {
                                    return <TextView key={post.id} data={post} />
                                }
                            })}

                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;



