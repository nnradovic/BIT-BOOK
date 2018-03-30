class Comment {
  constructor(comment){
    this.id = comment.id;
    this.dateCreated = comment.dateCreated;
    this.body= comment.body;
    this.postId = comment.postId;
    this.authorName = comment.authorName;
    this.authorId = comment.authorId;
  }

  getDatum() {
    const day = this.dateCreated.getDate();
    const month = this.dateCreated.getMonth();
    const year = this.dateCreated.getFullYear();
      
    return `${day}/${month}/${year}`;
}
}


export {Comment}