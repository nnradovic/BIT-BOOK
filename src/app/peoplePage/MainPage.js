import { Component, Fragment } from 'react'
import React from 'react'
import { postService } from '../../service/postService';
import UsersList from './UsersList'
import { url } from '../../shares/constans'
import Search from './Search'


class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            searchValue: ""
        }
    }

    componentDidMount() {
        postService.getUsers(`${url}api/users`)
            .then(usersList => {
                this.setState({
                    users: usersList
                })
            }).catch((error) => console.info(error))

    }

    onSearchValueChange = (searchValue) => {
        this.setState({ searchValue: searchValue.toLowerCase() })
    }

    getUsers = () => {
        const { users } = this.state

        return users.filter((user) => {
            return user.name.toLowerCase().includes(this.state.searchValue);
        })
    }



    render() {
        return (
            <Fragment>
                <Search onSearchValueChange={this.onSearchValueChange} />

                <UsersList users={this.getUsers()} />
            </Fragment>
        )
    }
}
export default MainPage