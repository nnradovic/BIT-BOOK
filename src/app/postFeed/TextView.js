import React from 'react';
import './text.css';




const TextView = (props) => {




    return (
        <p className="card-text textFeed">{props.data.text}</p>
    )

}
export default TextView;