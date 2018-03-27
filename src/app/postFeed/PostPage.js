import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import PostList from "./PostList";

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
            <Fragment>
                <PostList />
            </Fragment >

        )
    }
}
export default PostPage;
