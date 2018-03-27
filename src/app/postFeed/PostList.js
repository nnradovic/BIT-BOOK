import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans"
class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postService.getPosts(`${url}${textUrlGet}`)
            .then(postList => {
                console.log(postList);
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
                        <div className="col-8 offset-2">

                            {posts.map(post => {
                                if (post.instanceOf === 'Video') {
                                    return <VideoView />
                                } else if (post.instanceOf === 'Image') {
                                    return <ImageView />
                                } else {
                                    return <TextView />
                                }
                            })}
                            {/* <VideoView />
                            <br />
                            <VideoView />
                            <br />
                            <TextView />
                            <br />
                            <TextView />
                            <br />
                            <TextView />
                            <br />
                            <ImageView /> */}
                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;
