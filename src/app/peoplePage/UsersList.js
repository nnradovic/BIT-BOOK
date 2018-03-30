import React from 'react' 
import {Component} from 'react'
import UserItem from './UserItem'
import { postService } from '../../service/postService';
import {url} from '../../shares/constans'
 
class UsersList extends Component {
constructor (props){
    super(props)
    this.state = {
    users:[]
    }
}

componentDidMount(){
    postService.getUsers(`${url}api/users`)
    .then(usersList=>{
        this.setState({
            users:usersList})
    })
}
render(){
return(
    <div className="container">
    <div className="row">
    {this.state.users.map(user=>{
        return <UserItem user={user} key={user.id} />})}
    </div>
    </div>
)
}
}

export default UsersList