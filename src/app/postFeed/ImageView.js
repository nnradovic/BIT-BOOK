import React from 'react';
import './image.css';
const ImageView = (props) => {




    return (


        <img src={props.data.imageUrl} alt="Card cap" className="card-img-top" />

    )

}
export default ImageView;
