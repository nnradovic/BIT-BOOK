import { Video, Text, Image } from './../entities/Post';
import myFetchGet from './apiService';

class PostService {

    getPosts = (url) => {

        return myFetchGet(url)

            .then(posts => {
                return posts.map((post) => {

                    if (post.type === 'image') {
                        return new Image(post)
                    } else if (post.type === 'video') {
                        return new Video(post)
                    } else {
                        return new Text(post)
                    }

                    // post.type === 'image' ? new Image(post) :
                    //     post.videoUrl === 'video' ? new Video(post) :
                    //         new Text(post)
                }



                )
            })
    }
}

export const postService = new PostService();