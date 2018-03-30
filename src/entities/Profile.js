class Profile {
    constructor(profile) {
        this.userId = profile.userId;
        this.name = profile.name;
        this.aboutShort = profile.aboutShort;
        this.about = profile.about;
        this.avatarUrl = profile.avatarUrl;
        this.postCount = profile.postCount;
        this.commentsCount = profile.commentsCount
    }
}

export { Profile }