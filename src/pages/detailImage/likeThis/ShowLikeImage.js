import React, { Component } from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import {
    Link
  } from "react-router-dom";
import './ShowLikeImage.css';

class ShowLikeImage extends Component {
    render() {
        const { data: { src } } = this.props;
        return (
            <Link to="/detail-image">
            <div className="show-image">
                <img className="style-image" alt="kitty" src={src} />
                <div className="btn-botton-image">
                    <a href="#" className="btn-save">Save</a>
                    <ul className="list-group list-group-horizontal">
                        <li className="btn-first">
                            <a href="#">
                                <i><FaArrowRight /></i>
                                <span>asusmovie...</span>
                            </a>
                        </li>
                        <li className="btn-download">
                            <a href="#">
                                <FaDownload />
                            </a>
                        </li>
                        <li className="list-btn">
                            <a href="">
                                ...
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            </Link>
        );
    }
}

export default ShowLikeImage;