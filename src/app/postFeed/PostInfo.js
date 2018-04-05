import React from 'react';


const PostInfo = (props) => {

    return (
        <div>
            <p className="card-text videoPost  textBoot">{props.post.type} Post</p>
            <p className="card-text comment  textBoot">{parseInt(props.post.commentsNum, 10) ? `${props.post.commentsNum} Comments` : `No Comments`}</p>
        </div>
    )
}


export default PostInfo;

