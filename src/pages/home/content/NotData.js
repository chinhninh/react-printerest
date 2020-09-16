import React, { Component } from 'react';
import "./NotData.css";
import {connect} from 'react-redux';

class NotData extends Component {
    render() {
        const {textSearch} = this.props;
        // console.log("text search: ", textSearch)
        return (
            <div className="not-data">Not found "{textSearch}"</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        textSearch: state.searchImage.textSearch
    }
}

export default connect(mapStateToProps)(NotData);