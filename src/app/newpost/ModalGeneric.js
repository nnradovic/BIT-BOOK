import React from 'react'

const ModalGeneric= ({data}) => {

    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">New post</h3>
              <button type="button" className="close" data-dismiss="modal" onClick={this.clearInputs} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {data}
            </div>
          </div>
        </div>
      </div>
    )
}
export default ModalGeneric