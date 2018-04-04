class EditProfile {

 edit = (name, description, image,  about, email) =>{
    const url = "http://bitbookapi.azurewebsites.net/api/Profiles"
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify({name:name, aboutShort:description, avatarUrl:image, about:about, email:email}),
        headers: new Headers({
          "Content-Type": "application/json",
          "Key": " 3E09CF9",
          "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        })
      })

  }

}
export const editProfile = new EditProfile();
