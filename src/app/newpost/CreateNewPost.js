import React from 'react'
import { Component } from 'react'

class CreateNewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      btn: this.props.data
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

  chooseModal = () => {
    if (this.state.btn === "post") {
      return (
      <div>
      <p>post content</p>
      <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp"/>
      </div>
      )
    } else if (this.state.btn === "image") {
      return (
        <div>
      <p>post image url</p>
      <input type="text" className="form-control" id="exampleInputImage" aria-describedby="imageHelp"/>
      </div>
      )
    } else if (this.state.btn === "video") {
      return (
        <div>
        <p>post video src</p>
        <input type="video" className="form-control" id="exampleInputImage" aria-describedby="imageHelp"/>
        </div>
      )
    }
  }

  render() {
    console.log(this.state.btn)
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">New post</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.modalClosed}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.chooseModal()}
            </div>
            <div className="modal-footer">

              <button type="button" className="btn btn-primary">POST</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CreateNewPost