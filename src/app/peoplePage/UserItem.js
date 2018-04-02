import React from 'react'
import "./People.css";
import {Link} from 'react-router-dom'


const UserItem = (props) => {
  const {avatarUrl,name,aboutShort,lastPostDate, id} = props.user 
 
  

   const getLastPostDate = ()=>{
   const postDate = `${lastPostDate.getDate()}.${(lastPostDate.getMonth()+1)}.${lastPostDate.getFullYear()}`;
   const today = new Date()
   const todayDate = `${today.getDate()}.${(today.getMonth()+1)}.${today.getFullYear()}`
   const postTime = ` ${lastPostDate.getHours()}:${lastPostDate.getMinutes()  }`
   
   if (postDate === todayDate){
     return postTime
   } else {
     return postDate
   }
 }

    return(
<div className="card col-12">
<Link to={`/profile/${id}`}>
    <img className="card-img-top profileImg" src={avatarUrl} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title people ">{name}</h5>
      <p className="card-text people ">{aboutShort}</p>
      <p className="card-text people "><small className="text-muted"><strong>Last post at</strong> {getLastPostDate()}</small></p>
    </div>
    </Link>
  </div>
  
    )
}

export default UserItem