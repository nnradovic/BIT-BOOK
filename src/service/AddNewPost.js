import {newVideoPostUrl, newImagePostUrl, newTextPostUrl, headers, headers1} from '../shares/constans'

class AddNewPost{

 postNewPost = (postContent, postType) => {
     let body = {};
     let url = "";
     
        if (postType === "post") {
            body = JSON.stringify({text: postContent})
            url = newTextPostUrl;       
        }
        else if(postType === "image"){
            body = JSON.stringify({imageUrl: postContent})
            url = newImagePostUrl;
            
        }
        else if(postType === "video"){
            body = JSON.stringify({videoUrl: postContent})
            url = newVideoPostUrl;
            
        }
       
       return fetch(url, {
          method: 'POST',
          body: body,
          headers: {
            ...headers1,
            "SessionId": sessionStorage.getItem("sessionId")
        }
        })

    }

}

export const addNewPost = new AddNewPost();
   



    // postNewTextPost = (postContent) => {
        //         const body = JSON.stringify({text: postContent})
        //         const url = newTextPostUrl;
        //         return fetch(url,body)
                
        //     }
        // postNewImagePost = (postContent) => {
        //         const body = JSON.stringify({imageUrl: postContent})
        //         const url = newTextPostUrl;
                
        //     }
        //  postNewVideoPost = (postContent) => {
        //         const body = JSON.stringify({videoUrl: postContent})
        //         const url = newTextPostUrl;
                
        //     }
        
        //    fetch = (url, body) => (url, {
        //       method: 'POST',
        //       body: body,
        //       headers: new Headers({
        //         "Content-Type": "application/json",
        //         "Key": "bitbook",
        //         "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        //       })
        //     })

