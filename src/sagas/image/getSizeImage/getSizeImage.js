import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {GET_SIZE_IMAGE_REQUEST} from '../../../redux/actions/image/getSizeImage/actionType';
import {getSizeImageSuccess, getSizeImageError} from '../../../redux/actions/image/getSizeImage/actionCreator';
import ApiKey from '../../../api/ApiKEy';

export function* sizeImage(){
    yield takeLatest(GET_SIZE_IMAGE_REQUEST,sizeImageSaga)
}

const getSizeImage = () => {
    const linkGetSizeImage = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${ApiKey}&photo_id=50135803268&format=json&nojsoncallback=1`

    return axios({
        method: "GET",
        url: {linkGetSizeImage}
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

function* sizeImageSaga(getSizeImageAction) {
    try {
        const dataSizeImage = yield call(getSizeImage, getSizeImageAction.payload)
        yield put(getSizeImageSuccess(dataSizeImage))
    } catch (error) {
        yield put(getSizeImageError(error))
    }
}