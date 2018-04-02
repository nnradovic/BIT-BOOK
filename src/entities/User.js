class User{
    constructor(users){
        this.id=users.id;
        this.name = users.name;
        this.aboutShort = users.aboutShort || "Nothing about";
        this.lastPostDate = new Date(users.lastPostDate);
        this.avatarUrl = users.avatarUrl || `https://vignette.wikia.nocookie.net/hitlerrantsparodies/images/8/86/Placeholder_person.png/revision/latest?cb=20120506124456`
    }
}

export {User}