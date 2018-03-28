import React, { Fragment } from 'react';
import './image.css'
const ImageView = (props) => {



    return (
        <Fragment>
            <div className="card imageCard">
                <img className="card-img-top" src={props.data.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text videoPost">{props.data.type} Post</p>
                    <p className="card-text comment">{props.data.commentsNum} Comments</p>
                </div>
            </div>
        </Fragment>

    )

}
export default ImageView;
