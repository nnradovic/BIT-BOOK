const url = "http://bitbookapi.azurewebsites.net/";
const textUrlGet = "api/Posts/";
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