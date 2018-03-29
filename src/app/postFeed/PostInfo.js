import React from 'react';


const PostInfo = (props) => {
    console.log(props);
    return (
        <div>
            <p className="card-text videoPost  textBoot">{props.post.type} Post</p>
            <p className="card-text comment  textBoot">{parseInt(props.post.commentsNum) ? `${props.post.commentsNum} Comments` : `No Comments`}</p>
        </div>
    )
}


export default PostInfo;

