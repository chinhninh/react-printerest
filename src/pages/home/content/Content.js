import React, { Component } from 'react';
import Cat from '../../../images/Cat';
import { Masonry } from "masonic";
import ShowImage from './ShowImage';
import './Content.css';
import {connect} from 'react-redux';
import {GET_SIZE_IMAGE_REQUEST} from '../../../redux/actions/image/getSizeImage/actionType';

class Content extends Component {
    componentDidMount(){
        const {dataSearchImage, getDataSizeImage} = this.props;
        // console.log("test",dataSearchImage)
        // const id_Image = dataSearchImage
        getDataSizeImage()
    }

    render() {
        const {dataSearchImage, getDataSizeImage} = this.props;
        console.log("test",dataSearchImage)

        const items = (
            Array.from(Array(5000), () => ({
                id: i++,
                src: randomChoice(Cat)
            }))
        );

        return (
            <div className="">
                <div className="content-body">
                    <Masonry
                        // Provides the data for our grid items
                        items={items}
                        // Adds 8px of space between the grid cells
                        columnGutter={8}
                        // Sets the minimum column width to 172px
                        columnWidth={220}
                        // Pre-renders 5 windows worth of content
                        overscanBy={5}
                        // This is the grid item component
                        render={ShowImage}
                    />
                </div>
            </div>
        );
    }
}

const randomChoice = items => items[Math.floor(Math.random() * items.length)];
let i = 0;

const mapStateToProps = (state) => {
    return {
        dataSizeImage: state.getSizeImage.data,
        dataSearchImage: state.searchImage.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataSizeImage: () => dispatch({type:GET_SIZE_IMAGE_REQUEST})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);