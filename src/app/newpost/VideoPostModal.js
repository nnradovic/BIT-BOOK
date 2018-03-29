import React from 'react'

const VideoPostModal = ({data, data1, data2}) => {

    return(
        <div>
        <p>post video src</p>
        <input onChange={data1} type="video" className="form-control" id="exampleInputImage"  aria-describedby="imageHelp" />
        <div className="modal-footer">
          <button type="button" onClick={data} value={data2} data-dismiss="modal" className="btn btn-primary">POST</button>
        </div>
      </div>
    )
}
export default VideoPostModal