import React from 'react'
import { Component } from 'react'



class CreateNewPost extends Component {
constructor(props){
    super(props)
    console.log(props)
    this.state = {

    }
}


chooseModal = () =>  {
    if(this.props.btn ===  "btn2 btn-danger btn-all"){
        return   "radi"
    }
    else if(this.props.btn === "button.btn3.btn-info.btn-all" ){
        return "ne radi"
    }
}


render(){
    return(      
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
            {this.chooseModal}
     
      <div class="modal-footer">
      
        <button type="button" class="btn btn-primary">POST</button>
      </div>
    </div>
  </div>
</div>
    )
}
}
export default CreateNewPost