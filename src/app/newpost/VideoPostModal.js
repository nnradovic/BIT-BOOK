import React from 'react'
import {Component} from 'react'
import {validYoutube} from '../../shares/constans'

class VideoPostModal extends Component {
constructor(props){
  super(props)
  this.state={
    value:"",
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
checkUrl = () => {
  if(this.state.value.includes(validYoutube) ){
   return ( <button type="button" onClick={this.props.data} value={this.props.data2} data-dismiss="modal"  className="btn btn-primary">POST</button>)
  } else{
    return (<button type="button" disabled data-dismiss="modal"  className="btn btn-primary">POST</button>)
  }
}

    
render(){
return(
        <div>
        <p>post video src</p>
        <input onChange={this.props.data1} type="video" ref="fieldName" className="form-control" id="exampleInputImage" placeholder="Enter youtube url"  aria-describedby="imageHelp" />
        <div className="modal-footer">
          {this.checkUrl()}
        </div>
      </div>
    )
  }
}
export default VideoPostModal