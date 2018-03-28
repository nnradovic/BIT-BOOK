import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import CreateNewPost from '../newpost/CreateNewPost'
import "./PostList.css";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: "",
            showModal: false
        }
    }

    handleState = (event) => {
        this.setState({
            btn: event.target.id,
            showModal: !this.state.showModal
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        console.log(this.state.showModal)
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
                            {/* <div>
                                <button type="button" className="btn4 btn-warning btn-all" onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">
                                    +
                                </button>
                                <button type="button" className="btn2 btn-success btn-all" onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">

                                </button>
                                <button type="button" className="btn1 btn-danger btn-all" onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">

                                </button>
                                <button type="button" className="btn3 btn-info btn-all" onClick={this.handleState} data-toggle="modal" data-target="#exampleModal">

                                </button>
                            </div> */}

                            <div class="menu pmd-floating-action" role="navigation">
                               
                                <a href="javascript:void(0);" onClick={this.handleState} id="post" data-toggle="modal" data-target="#exampleModal" class="btn3 btn-info btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Post">
                                   
                                    
                                </a>
                                <a href="javascript:void(0);" onClick={this.handleState} id="image" data-toggle="modal" data-target="#exampleModal" className="btn2 btn-success btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Image">
                                    
                                </a>
                                <a href="javascript:void(0);" onClick={this.handleState} id="video" data-toggle="modal" data-target="#exampleModal" class=" btn1 btn-danger btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Video">
                                   
                                </a>
                                <a class="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-primary" data-title="Add Post" href="javascript:void(0);">
                                    <span class="pmd-floating-hidden">Primary</span>
                                    <i class="material-icons pmd-sm">add</i>
                                </a>
                            </div>

                            <CreateNewPost data={this.state.btn} modalClosed={this.closeModal} />
                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;



