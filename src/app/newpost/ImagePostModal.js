import React from 'react'

const ImagePostModal = ({data, data1, data2}) => {

    return(
        <div>
        <p>post image url</p>
        <input type="text" onChange={data1} className="form-control" id="exampleInputImage"  aria-describedby="imageHelp" />
        <div className="modal-footer">
          <button type="button" onClick={data} value={data2} data-dismiss="modal" className="btn btn-primary">POST</button>
        </div>
      </div>
    )
}
export default ImagePostModal