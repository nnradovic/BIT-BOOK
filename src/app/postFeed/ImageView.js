import React, { Fragment } from 'react';
import './image.css'
const ImageView = () => {



    return (
        <Fragment>
            <div className="card imageCard">
                <img className="card-img-top" src="http://via.placeholder.com/1200x600" alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text videoPost">Video Post</p>
                    <p className="card-text comment">15 Comments</p>
                </div>
            </div>
        </Fragment>

    )

}
export default ImageView;
