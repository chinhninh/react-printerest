import React, { Component } from 'react';
import './RightInfo.css';
import { FaUpload, FaChevronRight, FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { Media } from 'react-bootstrap';

class RightInfo extends Component {
    render() {
        return (
            <div className="col-lg-6 col-12 right-info">
                <div className="save">
                                <a href="#">
                                save
                    <div className="save2">
                        <div className="DgX">
                            <div className="uWM">
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                <a href="" className="upload">
                    <i ><FaUpload /></i>
                </a>
                <div className="website">
                    <a href="#" >
                        sdzsafaripark.org
                </a>
                </div>
                <div className="watch-live">
                    <a href="#" >
                        <h1>
                            Watch Live Video of Tigers on Tiger Cam
                    </h1>
                    </a>
                </div>
                <p className="description">
                    Enjoy watching live streaming video from Tull Family
                    Tiger Trail at the San Diego Zoo Safari Park, as our
                    Bengal and Sumatran tigers explore their forested surroundings
                    and interact with each other. Don’t be surprised if you see these
                    water-loving cats splashing in a pool or relaxing by a waterfall.
                </p>
                <div>
                    <div className="btn-comment">
                        <span>Comments</span>
                        <i><FaChevronDown /></i>
                    </div>
                    <div>
                        <p className="title-share">
                            Share feedback, ask a question or give a high five
                        </p>
                        <div>
                            <form className="form-inline form-comment">
                                <label for="comment"><i className="avatar-user-input"><FaUserCircle /></i></label>
                                <input type="text" className="form-control " placeholder="Add a comment" id="comment" />
                            </form>
                        </div>
                        <div className="comment-of-user">
                            <Media>
                                <i className="avatar-user"><FaUserCircle /></i>
                                <Media.Body>
                                    <p className="title-comment">
                                        <span>
                                            <a href="#">
                                                Lj Reim
                                            </a>
                                        </span>
                                        <span className="save-to">
                                            saved to
                                        </span>
                                        <span>
                                            <a href="#">
                                                Web cams
                                            </a>
                                        </span>
                                    </p>
                                    <p className="title-comment">
                                        Tiger Cam | San Diego Zoo Safari Park
                                     </p>
                                </Media.Body>
                            </Media>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightInfo;