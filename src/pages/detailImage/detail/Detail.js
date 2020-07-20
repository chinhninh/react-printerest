import React, { Component } from 'react';
import './Detail.css'
import BackHome from './backHome/BackHome';
import InfoImage from './infoImage/InfoImage';

class Detail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="row">
                    <BackHome />
                    <InfoImage />
                    <div className="col-lg-2 col-12"></div>
                </div>
            </div>
        );
    }
}

export default Detail;