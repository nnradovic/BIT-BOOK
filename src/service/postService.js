import { Video, Text, Image } from './../entities/Post';
import { Comment } from './../entities/Comments';
import { User } from './../entities/User';
import Profile from './../entities/Profile'
import {myFetchGet, myFetchPut}from './apiService';

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
                }

                )
            })
    }

    getSingleImagePosts = (url) => {
        return myFetchGet(url)
            .then(post => {
                return new Image(post)
            })
    }

    getSingleVideoPosts = (url) => {
        return myFetchGet(url)
            .then(post => {
                return new Video(post)
            })
    }

    getSingleTextPosts = (url) => {
        return myFetchGet(url)
            .then(post => {
                return new Text(post)
            })
    }
    getComments = (url) => {
        return myFetchGet(url)
            .then(comments => {
                return comments.map(comment => {
                    return new Comment(comment)
                })
            })
    }
    getUser = (url) => {
        return myFetchGet(url)
            .then(user => {
                // return users.map(user => {
                    return new User(user)
                })
            // })
    }
    getUsers = (url) => {
        return myFetchGet(url)
            .then(users => {
                 return users.map(user => {
                    return new User(user)
                })
             })
    }


    getProfile = (url) => {
        return myFetchGet(url)
            .then(profile => {
                return new Profile(profile)

            })
    }

    editProfile = (url,name,description,image,id,about,email) => {
        return myFetchPut(url,name,description,image,id,about,email)
        
    }
    
}


export const postService = new PostService();