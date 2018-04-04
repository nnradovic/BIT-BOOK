import React from 'react'
import { Component } from 'react'
import { addNewPost } from '../../service/AddNewPost'
import TextPostModal from './TextPostModal'
import ImagePostModal from './ImagePostModal'
import VideoPostModal from './VideoPostModal'
import ModalGeneric from './ModalGeneric';

class PostModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postType: "",
      value: ""
    }
  }

  componentDidMount() {
    this.setState({
      postType: this.props.data
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      postType: nextProps.data
    })
  }

  handlePostChange = (event) => {
    this.setState({ value: event.target.value })
  }

  createPost = () => {
    addNewPost.postNewPost(this.state.value, this.state.postType)
      .then((response) => {
        this.props.getPosts();

      })
      .catch((error) => console.info(error))
  }




  renderPostForm = () => {
    if (this.state.postType === "post") {

      return <TextPostModal data={this.createPost} data1={this.handlePostChange} data2={this.state.value} />

    } else if (this.state.postType === "image") {

      return <ImagePostModal data={this.createPost} data1={this.handlePostChange} data2={this.state.value} />

    } else if (this.state.postType === "video") {

      return <VideoPostModal data={this.createPost} data1={this.handlePostChange} data2={this.state.value} />
    }
  }

  render() {
    return <ModalGeneric data={this.renderPostForm()} />
  }
}
export default PostModal