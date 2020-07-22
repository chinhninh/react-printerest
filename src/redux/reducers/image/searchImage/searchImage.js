import { SEARCH_IMAGE_REQUEST, SEARCH_IMAGE_SUCCESS, SEARCH_IMAGE_ERROR } from "../../../actions/image/searchImage/actionType";

const dataSearchImage = {
    data: [],
    loading: false,
    error: false
}

const searchImage = (state = dataSearchImage, action) => {
    switch (action.type) {
        case SEARCH_IMAGE_REQUEST:
            return {
                ...state,
                loading: true,
                data: null,
                error: false
            }
        case SEARCH_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
            case SEARCH_IMAGE_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: true
                }    
        default:
            return state;
    }
}

export default searchImage;