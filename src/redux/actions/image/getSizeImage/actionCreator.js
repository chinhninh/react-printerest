import {GET_SIZE_IMAGE_ERROR, GET_SIZE_IMAGE_SUCCESS, GET_SIZE_IMAGE_REQUEST} from './actionType';

const getSizeImageRequest = () => {
    return {
        type: GET_SIZE_IMAGE_REQUEST
    }
}

const getSizeImageSuccess = (dataSearchImage) => {
    return {
        type: GET_SIZE_IMAGE_SUCCESS,
        payload: dataSearchImage
    }
}

const getSizeImageError = () => {
    return {
        type: GET_SIZE_IMAGE_ERROR
    }
}
export {
    getSizeImageRequest,
    getSizeImageSuccess,
    getSizeImageError
}