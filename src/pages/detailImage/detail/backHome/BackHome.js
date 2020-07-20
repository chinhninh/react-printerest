import React, { Component } from 'react';
import './BackHome.css';
import { FaArrowLeft } from 'react-icons/fa'
import {Link} from "react-router-dom";

class BackHome extends Component {
    render() {
        return (
            <div className="col-lg-2 col-2 back-home">
                <div>
                <Link to="/">
                        <i><FaArrowLeft /></i>
                        <span>For you</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BackHome;