import React, { Fragment } from 'react';
import './image.css';
import { Link } from 'react-router-dom';
import PostInfo from './PostInfo';
const ImageView = (props) => {




    return (

        <Link to={`/post/image/${props.data.id}`}>
            <div className="card imageCard">
                <img className="card-img-top" src={props.data.imageUrl} alt="Card image cap" />
                <div className="card-body imageCom">
                    {/* {(this.props.match.path === '/post/') ? <PostInfo /> : ""} */}
                    <p className="card-text videoPost  textBoot">{props.data.type} Post</p>
                    <p className="card-text comment  textBoot">{parseInt(props.data.commentsNum) ? `${props.data.commentsNum} Comments` : `No Comments`}</p>
                </div>


            </div>
        </Link>



    )

}
export default ImageView;
