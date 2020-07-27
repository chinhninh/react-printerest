import React, { Component } from 'react';
import './Image.css';
import {connect} from 'react-redux';

class Image extends Component {
    render() {
        const {dataUrl} = this.props;
        return (
            <div className="col-lg-6 col-12 image">
                <a href="#">
                    <img src={dataUrl}/>
                </a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataUrl: state.getIdAndSrc.url
    }
}

export default connect(mapStateToProps)(Image);