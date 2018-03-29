import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import PostContent from './PostContent'
import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans";
import PostInfo from './PostInfo';

const PostItem = (props) => {
    return (
        <Link to={`/post/text/${props.post.id}`}>
            <div className="card text">
                <div className="card-body">
                    <PostContent post={props.post} />
                    <div className="card-body">
                        <PostInfo post={props.post} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostItem;
