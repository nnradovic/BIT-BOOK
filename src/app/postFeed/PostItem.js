import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import PostContent from './PostContent'
import { postService } from "./../../service/postService";
import { url, textUrlGet, imageUrlSingle, videoUrlSingle, textUrlSingle, commentUrl, usersUrl } from "./../../shares/constans";
import PostInfo from './PostInfo';

const PostItem = (props) => {
    const { post } = props;
    return (
        <Link to={`/post/${post.type}/${post.id}`}>
            <div className="card text">
                <div className="card-body">
                    <PostContent post={post} />
                    <div className="card-body">
                        <PostInfo post={post} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostItem;
