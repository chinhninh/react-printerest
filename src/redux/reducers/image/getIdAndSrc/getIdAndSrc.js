import {GET_ID_AND_URL} from '../../../actions/image/getIdAndSrc/actionType';

const dataIdAndUrl = {
    id: "",
    url: ""
}

const getIdAndSrc = (state = dataIdAndUrl, action) => {
    switch (action.type) {
        case GET_ID_AND_URL:
            return {
                ...state,
                id: action.imgId,
                url: action.imgSource
            }
        default:
            return state;
    }
}

export default getIdAndSrc;