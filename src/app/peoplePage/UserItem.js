import React from 'react'
import "./People.css";
import { Link } from 'react-router-dom'
import Utils from '../../shares/utils'


const UserItem = (props) => {
  const { avatarUrl, name, aboutShort, lastPostDate, id } = props.user
  const today = new Date();

  // Imported from utils
  const getLastPostDate = () => {
    return Utils.checkPostTime(Utils.getPostDate(lastPostDate), Utils.getTodayDate(today), Utils.getPostTime(lastPostDate))
  }


  return (
    <div className="card col-12">
      <Link to={`/profile/${id}`}>
        <img className="card-img-top profileImg" src={avatarUrl} alt="Card  cap" />
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