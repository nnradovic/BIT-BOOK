class PostNewTextPost {

    postNewTextPost = (e) => {
        e.preventDefault()
        return fetch(`http://bitbookapi.azurewebsites.net/api/TextPosts/`, {
          method: 'POST',
          body: JSON.stringify({
            
            text: this.state.text,
            
          }),
          headers: new Headers({
            "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
          })
        })
    
      }
}

export const newTextPost = new PostNewTextPost();