import {GET_ID_AND_URL} from './actionType';

const getIdAndUrl = (imgSource,imgId) => {
    // console.log("long: ",idAndUrl)
    return {
        type: GET_ID_AND_URL,
        imgSource,
        imgId
    }
}

export {
    getIdAndUrl
}