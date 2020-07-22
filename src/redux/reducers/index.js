import {combineReducers} from 'redux';
import showFormComment from './animations/showFormComment/showFormComment';
import searchImage from './image/searchImage/searchImage';
import getSizeImage from './image/getSizeImage/getSizeImage';

const allReducers = combineReducers ({
    showFormComment,
    searchImage,
    getSizeImage
})

export default allReducers;