import React, { Fragment } from 'react';
import './text.css';
import { Link } from 'react-router-dom';
const TextView = (props) => {


    return (
<Link to={`/textview/${props.data.id}`}>
        <div className="card text">
            <div className="card-body">
                <p className="card-text">{props.data.text}</p>
                <div className="card-body">
                    <p className="card-text videoPost">{props.data.type} Post</p>
                    <p className="card-text comment">{props.data.commentsNum} Comments</p>
                </div>
            </div>
        </div>
        </Link>
    )

}
export default TextView;