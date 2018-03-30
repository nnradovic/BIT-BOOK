import React from 'react'
import { Component } from 'react'
// import {validImageUrl} from '../../shares/constans'

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
    const input = this.state.value;
    const lastDot = input.lastIndexOf(".");
    const inputLength = input.length
    const inputEnd = input.substring(lastDot, inputLength)

    if (inputEnd === ".jpg" || inputEnd === ".jpeg" || inputEnd === ".png" || inputEnd === ".svg" || inputEnd === ".gif") {
      return (<button type="button" onClick={this.props.data} value={this.props.data2} data-dismiss="modal" className="btn btn-primary">POST</button>)
    } else {
      return (<button type="button" disabled  data-dismiss="modal" className="btn btn-primary">POST</button>)
    }
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