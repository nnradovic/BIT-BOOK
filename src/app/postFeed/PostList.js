import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import CreateNewPost from '../newpost/CreateNewPost'

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn:null
        }
    }
  handleState = (event) => {
      this.setState({btn:event.target})
      console.log(this.state)
  }

    render() {

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <VideoView />
                            <br />
                            <VideoView />
                            <br />
                            <TextView />
                            <br />
                            <TextView />
                            <br />
                            <TextView />
                            <br />
                            <ImageView />
                            <CreateNewPost data={this.state.btn}/>
                            <div>
                            <button type="button btn1" class="btn4 btn-warning btn-all" onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">
                                +
                            </button>
                            <button type="button btn2" class="btn1 btn-success btn-all"onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">

                            </button>
                            <button type="button btn3" class="btn2 btn-danger btn-all"onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">

                            </button>
                            <button type="button btn4" class="btn3 btn-info btn-all"onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">

                            </button>
                            </div>
                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;
