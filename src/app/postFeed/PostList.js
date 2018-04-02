import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import PostModal from '../newpost/PostModal'
import "./PostList.css";
import Button from './Button'

import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans";
import PostItem from "./PostItem";

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

    onCreatePostClick = (type)=>{
        this.setState({btn: type})
    }



    render() {
        const posts = this.state.posts;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1">

                           <Button onCreatePost={this.onCreatePostClick}/>

                            <PostModal data={this.state.btn} getPosts={this.getPostsAgain} />

                            {posts.map(post => {
                                return <PostItem post={post} key={post.id} />
                            })}

                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;



