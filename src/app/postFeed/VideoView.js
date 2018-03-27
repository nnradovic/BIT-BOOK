import React, { Fragment } from 'react';
import './video.css'
const VideoView = () => {



    return (
        <Fragment>

            <div className="card ">
                <div className="pad">
                    <iframe height="400" width="100%" src="https://www.youtube.com/embed/_Nua3Cjdik0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div className="card-body">
                        <p className="card-text videoPost">Video Post</p>
                        <p className="card-text comment">15 Comments</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default VideoView;