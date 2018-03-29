import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans";

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
                                if (post.type === 'Video') {
                                    return (
                                        <div>
                                            <VideoView key={post.id} data={post} />
                                            <br />
                                        </div>
                                    )
                                } else if (post.type === 'Image') {
                                    return (
                                        <div>
                                            <ImageView key={post.id} data={post} />
                                            <br />
                                        </div>
                                    )
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
