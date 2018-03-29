import React, { Fragment } from 'react';
import './video.css'
const VideoView = (props) => {


    // src={"https://www.youtube.com/embed/CwjhxtBmQys"}
    return (
        <Fragment>

            <div className="card ">
                <div className="pad">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="420" height="315" src={props.data.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    <div className="card-body">
                        <p className="card-text videoPost">{props.data.type} Post</p>
                        <p className="card-text comment">{props.data.commentsNum} Comments</p>
                    </div>
                </div>
            </div >
        </Fragment >
    )

}
export default VideoView;