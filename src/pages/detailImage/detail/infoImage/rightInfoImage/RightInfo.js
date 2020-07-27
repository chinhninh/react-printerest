import React, { Component } from 'react';
import './RightInfo.css';
import { FaUpload, FaChevronRight, FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { Media } from 'react-bootstrap';
import { connect } from "react-redux";
import { SHOW_FORM_COMMENT } from '../../../../../redux/actions/showFormComment/actionType';

class RightInfo extends Component {
    render() {
        const { stateShowFormComment, toggleShowFormComment, description, title, userName } = this.props;

        const iconBtnComment = (stateShowFormComment ? <i><FaChevronRight /></i> : <i><FaChevronDown /></i>)
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
                <div>
                    <a href="" className="upload">
                        <i ><FaUpload /></i>
                    </a>
                </div>
                {/* detail image */}
                <div>
                    <div className="website">
                        <a href="#" >
                            {userName}
                        </a>
                    </div>
                    <div className="watch-live">
                        <a href="#" >
                            <h1>
                                {title}
                            </h1>
                        </a>
                    </div>
                    <p className="description">
                        {description}
                    </p>
                </div>

                <div>
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
                        {/* {dataInfoImage} */}
                        {/* Enjoy watching live streaming video from Tull Family
                        Tiger Trail at the San Diego Zoo Safari Park, as our
                        Bengal and Sumatran tigers explore their forested surroundings
                        and interact with each other. Don’t be surprised if you see these
                        water-lovin
                        g cats splashing in a pool or relaxing by a waterfall. */}
                    </p>
                </div>
                <div>
                    <div className="btn-comment">
                        <button className="btn" onClick={toggleShowFormComment}>
                            <span>Comments</span>
                            {iconBtnComment}
                        </button>
                    </div>
                    <div>
                        <div className={`${stateShowFormComment ? "show-form-comment" : "hide-form-comment"}`}>
                            <p className="title-share">
                                Share feedback, ask a question or give a high five
                            </p>
                            <div>
                                <form className="form-inline form-comment">
                                    <label for="comment"><i className="avatar-user-input"><FaUserCircle /></i></label>
                                    <input type="text" className="form-control " placeholder="Add a comment" id="comment" />
                                </form>
                            </div>
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

const mapStateToProps = (state) => {
    return {
        stateShowFormComment: state.showFormComment.state,
        description: state.infoImage.description,
        title: state.infoImage.title,
        userName: state.infoImage.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleShowFormComment: () => dispatch({ type: SHOW_FORM_COMMENT })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightInfo);