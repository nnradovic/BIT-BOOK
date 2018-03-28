import React, { Fragment } from 'react';
import './image.css';
import { Link } from 'react-router-dom';
const ImageView = (props) => {


    return (
        <Fragment>
            <Link to={`/imageview/${props.data.id}`}>
                <div className="card imageCard">
                    <img className="card-img-top" src={props.data.imageUrl} alt="Card image cap" />
                    <div className="card-body imageCom">
                        <p className="card-text videoPost">{props.data.type} Post</p>
                         <p className="card-text comment">{props.data.commentsNum} Comments</p>
                    </div>
                   
                 
                </div>
            </Link>

        </Fragment>

    )

}
export default ImageView;
