class User{
    constructor(users){
        this.id=users.id;
        this.name = users.name;
        this.aboutShort = users.aboutShort;
        this.lastPostDate = new Date(users.lastPostDate);
        this.avatarUrl = users.avatarUrl;
    }
}

export {User}