import React from 'react'
import { Component } from 'react'
import UserItem from './UserItem'



const UsersList = (props) => {
    return (
        <div className="container" >
            <div className="row">

                {props.users.map(user => {
                    return <UserItem user={user} key={user.id} />
                })}
            </div>
        </div>
    )
}

export default UsersList