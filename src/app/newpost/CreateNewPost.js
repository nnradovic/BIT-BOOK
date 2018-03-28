import React from 'react'
import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {postNewTextPost} from '../../service/PostNewTextPost'
import {PropTypes} from "prop-types"

class CreateNewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      btn: this.props.data,
      text: "",
      videoUrl:"",
      imageUrl:""
    }
  }

  componentDidMount() {
    this.setState({
      btn: this.props.data
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      btn: nextProps.data
    })
    // console.log(this.state.btn)
  }

  handlePostChange = (event) => {
    this.setState({text: event.target.value})  
  }

  handleVideoPostChange = (event) => {
    this.setState({ videoUrl:event.target.value})
  }

  handleImagePostChange = (event) => {
    this.setState({imageUrl:event.target.value})
  }


  


  postNewTextPost = (e) => {
    e.preventDefault()
    fetch(`http://bitbookapi.azurewebsites.net/api/TextPosts/`, {
      method: 'POST',
      body: JSON.stringify({
        
        text: this.state.text,
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      })
    }).then((response) => {
      this.props.getPosts();
      this.clearInputs();
    })

  }

    postNewVideoPost = (e) => {
      e.preventDefault()
      fetch(`http://bitbookapi.azurewebsites.net/api/VideoPosts/`, {
        method: 'POST',
        body: JSON.stringify({
          
          videoUrl: this.state.videoUrl,
    
        }),
        headers: new Headers({
          "Content-Type": "application/json",
              "Key": "bitbook",
              "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        })
      }).then((response) => {
        this.props.getPosts();
        this.clearInputs();
      })
 
    }
      postNewImagePost = (e) => {
        e.preventDefault()
        fetch(`http://bitbookapi.azurewebsites.net/api/ImagePosts/`, {
          method: 'POST',
          body: JSON.stringify({
            
            imageUrl: this.state.imageUrl,
            
          }),
          headers: new Headers({
            "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
          })
        }) .then((response) => {
          this.props.getPosts();
          this.clearInputs();
        })
   
  }
  clearInputs = () => {
    this.refs.fieldName.value="";
  }


  chooseModal = () => {
    if (this.state.btn === "post") {
      return (
        <div>
          <p>post content</p>
          <input type="text"  onChange={this.handlePostChange} className="form-control" id="exampleInputText"  ref="fieldName" aria-describedby="textHelp" />
          <div className="modal-footer">
            <button type="button" onClick={this.postNewTextPost} data-dismiss="modal"   className="btn btn-primary">POST</button>
          </div>
        </div>
      )
    } else if (this.state.btn === "image") {
      return (
        <div>
          <p>post image url</p>
          <input type="text" onChange={this.handleImagePostChange} className="form-control" id="exampleInputImage" ref="fieldName" aria-describedby="imageHelp" />
          <div className="modal-footer">
            <button type="button"onClick={this.postNewImagePost} data-dismiss="modal" className="btn btn-primary">POST</button>
          </div>
        </div>
      )
      
    } else if (this.state.btn === "video") {
      return (
        <div>
          <p>post video src</p>
          <input onChange={this.handleVideoPostChange} type="video" className="form-control" id="exampleInputImage" ref="fieldName" aria-describedby="imageHelp" />
          <div className="modal-footer">
            <button type="button" onClick={this.postNewVideoPost} data-dismiss="modal" className="btn btn-primary">POST</button>
          </div>
        </div>
      )
    }
  }

  render() {
    
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">New post</h3>
              <button type="button" className="close"  data-dismiss="modal"  aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.chooseModal()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CreateNewPost.propTypes = {
  text: PropTypes.boolean,
  videoUrl: PropTypes.string,
  imageUrl: PropTypes.string
}

export default withRouter(CreateNewPost)