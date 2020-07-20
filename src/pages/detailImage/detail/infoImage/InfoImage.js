import React, { Component } from 'react';
import Image from './image/Image';
import RightInfo from './rightInfoImage/RightInfo';
import './InfoImage.css';

class InfoImage extends Component {
    render() {
        return (
            
            <div className="col-lg-8 col-8 info-image">
                <div className="row content-info-image">
                    <Image/>
                    <RightInfo/>
                </div>
            </div>
        );
    }
}

export default InfoImage;