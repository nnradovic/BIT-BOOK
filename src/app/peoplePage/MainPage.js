import {Component, Fragment} from 'react'
import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
// import Search from './Search'
import UsersList from './UsersList'


class MainPage extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <Fragment>
           <UsersList />
            </Fragment>
        )
    }
}
export default MainPage