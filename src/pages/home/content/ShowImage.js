import React, { Component } from 'react';
import './ShowImage.css';
import { FaDownload } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getIdAndUrl } from '../../../redux/actions/image/getIdAndSrc/actionCreator';
import { INFO_IMAGE_REQUEST } from '../../../redux/actions/image/infoImage/actionType';

class ShowImage extends Component {
    select_img() {
        const { data: { id, src }, getDataIdAndUrl, getDataInfoImage } = this.props;
        // var idAndUrl = {
        var imgSource = document.getElementById(id).src;
        var imgId = document.getElementById(id).id;
        // }

        getDataIdAndUrl(imgSource, imgId);
        getDataInfoImage(imgId)
    }
    render() {
        const { data: { id, src } } = this.props;
        // console.log({data:{id,src}})
        return (
            <Link to="/detail-image" onClick={this.select_img.bind(this)}>
                <div className="show-image">
                    <img id={id} className="style-image" alt="kitty" src={src} />
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

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataIdAndUrl: (imgSource, imgId) => dispatch(getIdAndUrl(imgSource, imgId)),
        getDataInfoImage: (imgId) => dispatch({ type: INFO_IMAGE_REQUEST, payload: imgId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowImage);