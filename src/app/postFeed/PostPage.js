import React, { Fragment } from 'react';
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
