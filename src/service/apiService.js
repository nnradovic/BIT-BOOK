const myFetchGet = (url) => {
    const requestOpt = {
        headers: {
            "Content-Type": "application/json",
            "Key": "3E09CF9",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        }
    }

    return fetch(url, requestOpt).then(response => {

        return response.json()

    });
}

export default myFetchGet; 