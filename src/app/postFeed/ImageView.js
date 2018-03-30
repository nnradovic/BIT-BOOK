import React, { Fragment } from 'react';
import './image.css';
import { Link } from 'react-router-dom';
import PostInfo from './PostInfo';
const ImageView = (props) => {




    return (


        <img className="card-img-top" src={props.data.imageUrl} alt="Card image cap" />

    )

}
export default ImageView;
