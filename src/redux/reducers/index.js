import {combineReducers} from 'redux';
import showFormComment from './animations/showFormComment/showFormComment';
import searchImage from './image/searchImage/searchImage';
import getSizeImage from './image/getSizeImage/getSizeImage';
import getIdAndSrc from './image/getIdAndSrc/getIdAndSrc';
import infoImage from './image/infoImage/infoImage';

const allReducers = combineReducers ({
    showFormComment,
    searchImage,
    getSizeImage,
    getIdAndSrc,
    infoImage
})

export default allReducers;