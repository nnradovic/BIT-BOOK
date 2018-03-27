import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <VideoView />
                            <br />
                            <VideoView />
                            <br />
                            <TextView />
                            <br />
                            <TextView />
                            <br />
                            <TextView />
                            <br />
                            <ImageView />
                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;
