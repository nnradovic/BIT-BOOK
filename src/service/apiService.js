import {headers} from '../shares/constans'

const myFetchGet = (url) => {
    const requestOpt = {
        headers: headers
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
        headers: headers
    }
    return fetch(url, requestOpt).then(response => {
        if (response.status === 404) {
            
        }
        return response
    });
    
  
   }


export { myFetchGet, myFetchPut}; 