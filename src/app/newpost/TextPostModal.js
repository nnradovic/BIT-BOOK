import React from 'react'

const TextPostModal = ({data, data1, data2}) => {

    return(
        <div>
        <p>post content</p>
        <input type="text" onChange={data1} className="form-control" id="exampleInputText"  aria-describedby="textHelp" />
        <div className="modal-footer">
          <button type="button" onClick={data} value={data2} data-dismiss="modal" className="btn btn-primary">POST</button>
        </div>
      </div>
    )
}
export default TextPostModal