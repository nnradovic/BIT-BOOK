import React from 'react'
import { Component } from 'react'

class TextPostModal extends Component {
  // constructor(props) {
  //   super(props)
  // }


  render() {
    return (
      <div>
        <p>post content</p>
        <input type="text" onChange={this.props.data1} className="form-control" id="exampleInputText" placeholder="Enter your text post" aria-describedby="textHelp" />
        <div className="modal-footer">
          <button type="button" onClick={this.props.data} ref="fieldName" value={this.props.data2} data-dismiss="modal" className="btn btn-primary">POST</button>
        </div>
      </div>
    )
  }
}
export default TextPostModal