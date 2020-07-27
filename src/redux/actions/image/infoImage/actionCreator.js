import { INFO_IMAGE_ERROR, INFO_IMAGE_REQUEST, INFO_IMAGE_SUCCESS } from './actionType';

const infoImageRequest = () => {
    return {
        type: INFO_IMAGE_REQUEST
    }
}

const infoImageSuccess = (descriptionImage,titleImage,usernameImage) => {
    return {
        type: INFO_IMAGE_SUCCESS,
        payload: {
            description: descriptionImage,
            title: titleImage,
            userName: usernameImage
        }
    }
}

const infoImageError = () => {
    return {
        type: INFO_IMAGE_ERROR
    }
}

export {
    infoImageRequest,
    infoImageSuccess,
    infoImageError
}