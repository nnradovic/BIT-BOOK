const url = "http://bitbookapi.azurewebsites.net/";
const textUrlGet = "api/Posts/";

const newTextPostUrl = "http://bitbookapi.azurewebsites.net/api/TextPosts/"
const newImagePostUrl = "http://bitbookapi.azurewebsites.net/api/ImagePosts/"
const newVideoPostUrl = "http://bitbookapi.azurewebsites.net/api/VideoPosts/"
const validYoutube = "https://www.youtube.com/watch?v="
const validImageUrl = [".jpg", ".jpeg", ".png", ".svg", ".gif"]


export { url, textUrlGet, newTextPostUrl, newImagePostUrl, newVideoPostUrl, validYoutube,validImageUrl }

const imageUrlSingle = 'api/ImagePosts/'
const videoUrlSingle = 'api/VideoPosts/'
const textUrlSingle = 'api/TextPosts/'
const commentUrl = 'api/Comments?postId='
const usersUrl = 'api/users?postId='
const TYPES = {
    VIDEO: "video",
    TEXT: "text",
    IMAGE: "image"
}


export { url, textUrlGet, imageUrlSingle, videoUrlSingle, textUrlSingle, commentUrl, usersUrl, TYPES }
