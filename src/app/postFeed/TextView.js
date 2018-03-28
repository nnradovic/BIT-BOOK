import React, { Fragment } from 'react';
import './text.css'
const TextView = (props) => {



    return (

        <div className="card text">
            <div className="card-body">
                <p className="card-text">{props.data.text}</p>
                <div className="card-body">
                    <p className="card-text videoPost">{props.data.type} Post</p>
                    <p className="card-text comment">{props.data.commentsNum} Comments</p>
                </div>
            </div>
        </div>
    )

}
export default TextView;