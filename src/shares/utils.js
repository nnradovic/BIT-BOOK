import React from 'react'
import { validYoutube } from './constans'
class Utils {
    // postDatecheck
    static getPostDate = (lastPostDate) => {
        return `${lastPostDate.getDate()}.${(lastPostDate.getMonth() + 1)}.${lastPostDate.getFullYear()}`;
    } 

    static getTodayDate = (today) => {
        return `${today.getDate()}.${(today.getMonth() + 1)}.${today.getFullYear()}`;
    }

    static getPostTime = (lastPostDate) => {
        console.log(lastPostDate.getHours());
        return ` ${lastPostDate.getHours()}:${lastPostDate.getMinutes()}`
    }

    static checkPostTime = (postDate, todayDate, getPostTime) => {
        if (postDate === todayDate) {
            return getPostTime
        } else {
            return postDate
        }
    } 


    //youtube validation

    static checkUrl = (value, data, data2, validYouTube) => {
        if (value.includes(validYoutube)) {
            return (<button type="button" onClick={data} value={data2} data-dismiss="modal" className="btn btn-primary">POST</button>)
        } else if (value !== "" && !(value.includes(validYoutube))) {
            return (
                <div>
                    <p className="text-danger">Input must be valid youtube video url!</p>
                    <button type="button" disabled data-dismiss="modal" className="btn btn-primary">POST</button>
                </div>
            )
        }
            else{
                return <button type="button" disabled data-dismiss="modal" className="btn btn-primary">POST</button>
            }
        } 
        
        
        
        // img validation 
    

    static checkImageUrl = (value, data, data2) => {
        const input = value;
        const lastDot = input.lastIndexOf(".");
        const inputLength = input.length
        const inputEnd = input.substring(lastDot, inputLength)

        if (inputEnd === ".jpg" || inputEnd === ".jpeg" || inputEnd === ".png" || inputEnd === ".svg" || inputEnd === ".gif") {
            return (<button type="button" onClick={data} value={data2} data-dismiss="modal" className="btn btn-primary">POST</button>)
        } else if ((inputEnd !== ".jpg" || inputEnd !== ".jpeg" || inputEnd !== ".png" || inputEnd !== ".svg" || inputEnd !== ".gif") && inputEnd !== "") {
            return (
                <div>
                    <p className="text-danger">Invalid image url!</p>
                    <button type="button" disabled data-dismiss="modal" className="btn btn-primary">POST</button>
                </div>
            )
        } else {
            return <button type="button" disabled data-dismiss="modal" className="btn btn-primary">POST</button>
        }
    }


    static validateProfileImage = (value, data) => {
        const input = value;
        const lastDot = input.lastIndexOf(".");
        const inputLength = input.length
        const inputEnd = input.substring(lastDot, inputLength)
    
        if (inputEnd === ".jpg" || inputEnd === ".jpeg" || inputEnd === ".png" || inputEnd === ".svg" || inputEnd === ".gif") {
           return  <button onClick={data} type="button" data-dismiss="modal" className="btn btn-primary">Save changes</button>
        }  else {
            return <button type="button" disabled data-dismiss="modal" className="btn btn-primary">Save changes</button>
        }
    }


    static validateEmail = (email) => {
     const re = /\S+@\S+\.\S+/;
        return re.test(email);

    }
    static validatePass = (password) => {
       
            const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            return re.test(password);
        
    
}
}


export default Utils


