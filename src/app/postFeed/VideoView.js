import React, { Fragment } from 'react';
import './video.css'
import { Link } from 'react-router-dom';
const VideoView = (props) => {


    return (

        // <Link to={`/post/video/${props.data.id}`}>
        //     <div className="card ">
        //         <div className="pad">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe width="420" height="315" src={props.data.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        // <div className="card-body">
        //     <p className="card-text videoPost textBoot">{props.data.type} Post</p>
        //     <p className="card-text comment textBoot">{parseInt(props.data.commentsNum) ? `${props.data.commentsNum} Comments` : `No Comments`}</p>
        // </div>
        //         </div>
        //     </div >
        //     <br />
        // </Link>

    )

}
export default VideoView;