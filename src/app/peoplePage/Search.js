import React,{Component} from 'react'
import "./People.css";

class Search extends Component{
    constructor(props){
        super()
    
    this.state = {
        value:""
    }
}

     handleChange = (event) => {
        const inputValue = event.target.value
        this.props.onSearchValueChange(inputValue)
        this.setState({value: inputValue})
    }
     render(){
        return (
            <div className="container">
          
            <nav className="navbar nav-search  navbar-light bg-light justify-content-between">
            <form className="form-inline col-12">
              <input onChange={this.handleChange} className="form-control col-12" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </nav>
          
          </div>

        )
    }
}


export default Search