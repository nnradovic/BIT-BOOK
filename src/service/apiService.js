const myFetchGet = (url) => {
    const requestOpt = {
        headers: {
            "Content-Type": "application/json",
            "Key": "3E09CF9",
            "SessionId": sessionStorage.getItem("sessionId")
        }
    }

    return fetch(url, requestOpt).then(response => {
        if (response.status === 404) {
            
        };
        return response.json()
    });
}





const myFetchPut = (url,name,description,image,about,email) => {
    
    const requestOpt = {
        method: 'PUT',
        body: JSON.stringify({name:name, aboutShort:description, avatarUrl:image,  about:about, email:email}),
        headers: new Headers({
            "Content-Type": "application/json",
            "Key": " 3E09CF9",
            "SessionId": sessionStorage.getItem("sessionId")
        })
    }
    return fetch(url, requestOpt).then(response => {
        if (response.status === 404) {
            
        }
        return response
    });
    
  
   }


export { myFetchGet, myFetchPut}; 