import { INFO_IMAGE_ERROR, INFO_IMAGE_SUCCESS, INFO_IMAGE_REQUEST } from '../../../actions/image/infoImage/actionType';

const dataInfoImage = {
    loading: false,
    description: "",
    title: "",
    userName: "",
    error: false
}

const infoImage = (state = dataInfoImage, action) => {
    switch (action.type) {
        case INFO_IMAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case INFO_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                description: action.payload.description,
                title: action.payload.title,
                userName: action.payload.userName,
                error: false
            }
            case INFO_IMAGE_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: true
                }    
        default:
            return state;
    }
}

export default infoImage;