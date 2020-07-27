import React, { Component } from 'react';
import './BackHome.css';
import { FaArrowLeft } from 'react-icons/fa'
import {Link,withRouter} from "react-router-dom";

class BackHome extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="col-lg-2 col-2 back-home">
                <div>
                <Link onClick={this.goBack.bind(this)}>
                        <i><FaArrowLeft /></i>
                        <span>For you</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(BackHome);