import React from "react";

const Comment = (props) => {

    return (
        <div className="card comm">
            <div className="card-body">

                <img src={props.data.avatarUrl} className=" float-left" alt="..." />

                <p className="card-text comText">{props.data.body}</p>
            </div>
            <h5 className="card-title comName">{props.data.authorName}</h5>
        </div>
    )
}

export default Comment;