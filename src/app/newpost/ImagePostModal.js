import React from 'react'
import { Component } from 'react'
import Utils from "../../shares/utils"

class ImagePostModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.data2
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.data2
    })
  }

  checkImageUrl = () => {
   return Utils.checkImageUrl(this.state.value, this.props.data, this.props.data2)
  }
  
  render() {
    return (
      <div>
        <p>post image url</p>
        <input type="text" onChange={this.props.data1} ref="fieldName" className="form-control" id="exampleInputImage" placeholder="Enter image url" aria-describedby="imageHelp" />
        <div className="modal-footer">
          {this.checkImageUrl()}
        </div>
      </div>
    )
  }
}


export default ImagePostModal