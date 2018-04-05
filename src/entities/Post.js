class Post {
    constructor(post) {
        this.id = post.id;
        this.dateCreated = new Date(post.dateCreated);
        this.userId = post.userId;
        this.userDisplayName = post.userDisplayName;
        this.type = post.type;
        this.commentsNum = post.commentsNum;
    }

}


class Video extends Post {
    constructor(post) {
        super(post)
        this.videoUrl = post.videoUrl.replace("watch?v=", "embed/");
    }

}
class Text extends Post {
    constructor(post) {
        super(post)
        this.text = post.text;
    }
}
class Image extends Post {
    constructor(post) {
        super(post)
        this.imageUrl = post.imageUrl;
    }
}
export { Video, Text, Image };