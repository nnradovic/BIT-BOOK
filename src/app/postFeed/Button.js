import "./PostList.css";
import React from 'react'


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: "",
        }
        console.log(props);
    }

    handleState = (event) => {
        this.setState({
            btn: event.target.id
        })
        this.props.callBackFromParent(this.state.btn)
    }




    render() {
        return (
            <div className="menu pmd-floating-action" role="navigation">

                <a onClick={this.handleState} id="post" data-toggle="modal" data-target="#exampleModal" className="btn3 btn-info btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Post">


                </a>
                <a onClick={this.handleState} id="image" data-toggle="modal" data-target="#exampleModal" className="btn2 btn-success btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Image">

                </a>
                <a onClick={this.handleState} id="video" data-toggle="modal" data-target="#exampleModal" className=" btn1 btn-danger btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Video">

                </a>
                <a className="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-primary" data-title="Add Post" href="javascript:void(0);">
                    <span className="pmd-floating-hidden">Primary</span>
                    <i className="material-icons pmd-sm">add</i>
                </a>
            </div>
        )
    }
}
export default Button