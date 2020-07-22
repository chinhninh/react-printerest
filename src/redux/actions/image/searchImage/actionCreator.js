import {SEARCH_IMAGE_REQUEST, SEARCH_IMAGE_SUCCESS, SEARCH_IMAGE_ERROR} from "./actionType";

const searchImageRequest = () => {
    return {
        type: SEARCH_IMAGE_REQUEST
    }
}

const searchImageSuccess = (dataSearchImage) => {
    return {
        type: SEARCH_IMAGE_SUCCESS,
        payload: dataSearchImage
    }
}

const searchImageError = () => {
    return {
        type: SEARCH_IMAGE_ERROR
    }
}

export {
    searchImageRequest,
    searchImageSuccess,
    searchImageError
}