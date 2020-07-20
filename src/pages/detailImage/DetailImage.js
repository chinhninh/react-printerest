import React, { Component } from 'react';
import Detail from './detail/Detail';
import LikeThis from './likeThis/LikeThis';
import './DetailImage.css';

class DetailImage extends Component {
    render() {
        return (
            <div>
               <Detail/>
               <div className="more-like-this">
                   More like this
               </div>
               <LikeThis/>
            </div>
        );
    }
}

export default DetailImage;