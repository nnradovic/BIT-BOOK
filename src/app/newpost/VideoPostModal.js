import React from 'react'
import {Component} from 'react'
import {validYoutube} from '../../shares/constans'
import Utils from "../../shares/utils"

class VideoPostModal extends Component {
constructor(props){
  super(props)
  this.state={
    value:"",
  }
  console.log(validYoutube);
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
checkYouTubeUrl = () => {
 return Utils.checkUrl(this.state.value,this.props.data, this.props.data2, validYoutube)
}

    
render(){
return(
        <div>
        <p>post video src</p>
        <input onChange={this.props.data1} type="video" ref="fieldName" className="form-control" id="exampleInputImage" placeholder="Enter youtube url"  aria-describedby="imageHelp" />
        <div className="modal-footer">
          {this.checkYouTubeUrl()}
        </div>
      </div>
    )
  }
}
export default VideoPostModal