import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
    render() {
        return (
            <div className="col-lg-6 col-12 image">
                <a href="#">
                    <img src="https://cdn.pixabay.com/photo/2017/05/22/07/40/cat-2333413__480.jpg"/>
                </a>
            </div>
        );
    }
}

export default Image;