import React, { Component } from 'react';
import './ShowImage.css';
import { FaDownload } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

class ShowImage extends Component {
    render() {
        const { data: { src } } = this.props;
        return (
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
        );
    }
}

export default ShowImage;