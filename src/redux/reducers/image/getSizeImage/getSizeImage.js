import { GET_SIZE_IMAGE_ERROR, GET_SIZE_IMAGE_SUCCESS, GET_SIZE_IMAGE_REQUEST } from '../../../actions/image/getSizeImage/actionType';

const dataSizeImage = {
    data: [],
    loading: false,
    error: false
}

const getSizeImage = (state = dataSizeImage, action) => {
    switch (action.type) {
        case GET_SIZE_IMAGE_REQUEST:
            return {
                ...state,
                data: null,
                loading: true,
                error: false
            }
        case GET_SIZE_IMAGE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }
        case GET_SIZE_IMAGE_ERROR:
            return {
                ...state,
                data: null,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default getSizeImage;