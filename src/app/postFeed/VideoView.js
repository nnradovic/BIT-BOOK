import React from 'react';
import './video.css'
const VideoView = (props) => {


    return (


        <div className="embed-responsive embed-responsive-16by9">
            <iframe title="This is a unique title" width="420" height="315" src={props.data.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>

    )

}
export default VideoView;