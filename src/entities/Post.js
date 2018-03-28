class Post {
    constructor(post) {
        this.id = post.id;
        this.dateCreated = new Date(post.dateCreated);
        this.userId = post.userId;
        this.userDisplayName = post.userDisplayName;
        this.type = post.type.charAt(0).toUpperCase() + post.type.slice(1);
        this.commentsNum = post.commentsNum;
    }
    getDatum() {
        const day = this.dateCreated.getDate();
        const month = this.dateCreated.getMonth();
        const year = this.dateCreated.getFullYear();

        return `day / month / year `
    }


    // isVideo() {
    //     return this.type === 'video'
    // }
    // https://www.youtube.com/embed/CwjhxtBmQys

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