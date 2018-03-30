import React, { Fragment } from 'react';
import './text.css';


import PostInfo from './PostInfo';

const TextView = (props) => {




    return (
        <p className="card-text textFeed">{props.data.text}</p>
    )

}
export default TextView;