import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans";
import PostInfo from './PostInfo';
const PostContent = (props) => {




    const postContent = () => {
        if (props.post.type === 'Video') {
            return <VideoView key={props.post.id} data={props.post} />
        } else if (props.post.type === 'Image') {
            return <ImageView key={props.post.id} data={props.post} />
        } else {
            return <TextView key={props.post.id} data={props.post} />
        }
    }



    return (
        <Fragment>
            {postContent()}
        </Fragment >
    )
}
export default PostContent;
