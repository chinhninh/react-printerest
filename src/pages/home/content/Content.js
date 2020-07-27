import React, { Component } from 'react';
import Cat from '../../../images/Cat';
import { Masonry } from "masonic";
import ShowImage from './ShowImage';
import './Content.css';
import {connect} from 'react-redux';
import {GET_SIZE_IMAGE_REQUEST} from '../../../redux/actions/image/getSizeImage/actionType';

class Content extends Component {

    render() {
        const {dataSearchImage, getDataSizeImage,loading} = this.props;
        // console.log(dataSearchImage)
        
        const itemImages = []
        
       
        dataSearchImage.map(function(item, i){
            let url = 'https://farm2.staticflickr.com/'
            let id_data = item.id
            url += item.server+'/'+id_data+'_'+item.secret+'_n.jpg'
            let arr_child = {
                id: id_data,
                src: url
            }
            itemImages.push(arr_child)
            
        })
        console.log(itemImages)

        const items = []

        // const items = (
        //     itemImages.map((item,index)=> {
        //         Array.from(Array(5000), () => ({
        //             id: item[0],
        //             src: randomChoice(item[1])
        //         }))
        //     }) 
        // );

        // console.log(items)

        return (
            <div className="">
                <div className="content-body">
                    <Masonry
                        // Provides the data for our grid items
                        items={itemImages}
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
        dataSearchImage: state.searchImage.data,
        loading: state.searchImage.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataSizeImage: (dataSearchImage) => dispatch({type:GET_SIZE_IMAGE_REQUEST, payload:dataSearchImage})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);