import React, { Fragment } from 'react';
import PostModal from '../newpost/PostModal'
import "./PostList.css";
import Button from './Button'
import { postService } from "./../../service/postService";
import { url, textUrlGet, headers1 } from "./../../shares/constans";
import PostItem from "./PostItem";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: "",
            posts: [],
            value: ""
        }
    }


    handleState = (event) => {
        this.setState({
            btn: event.target.id
        })
    }



    componentDidMount() {
        this.fetchPosts()
        console.log(...headers1);
    }

    fetchPosts = () => {
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
    getType = () => {
        this.setState({
            type: this.state.type
        })
        console.log('111');

    }
    handlePostChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value);


    }
    onCreatePostClick = (type) => {
        this.setState({ btn: type })


    }


    render() {
        const posts = this.state.posts;
        let filterPost = posts.filter((postType) => { return postType.type.indexOf(this.state.value) !== -1 })
        //console.log(filterPost);

        return (
            <Fragment>

                <div className="dropDownRight" >
                    <select onChange={this.handlePostChange} value={this.state.value} className="btnDrop">
                        <option value="" >Option</option>
                        <option value="video" >*Videos</option>
                        <option value="image"  >*Image</option>
                        <option value="text"  >*Text</option>
                    </select>
                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-8 offset-md-2 item">

                            <Button onCreatePost={this.onCreatePostClick} />

                            <PostModal data={this.state.btn} getPosts={this.getPostsAgain} />
                            {
                                (this.state.value === '') ? posts.map(post => {
                                    return <PostItem onPostDelete={this.fetchPosts} post={post} key={post.id} />
                                }) : filterPost.map(singlePost => {
                                    return <PostItem onPostDelete={this.fetchPosts} post={singlePost} key={singlePost.id} />
                                })
                            }

                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;



