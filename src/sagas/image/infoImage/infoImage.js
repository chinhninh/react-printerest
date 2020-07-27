import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {INFO_IMAGE_REQUEST} from '../../../redux/actions/image/infoImage/actionType';
import {infoImageSuccess,infoImageError} from '../../../redux/actions/image/infoImage/actionCreator';
import ApiKey from '../../../api/ApiKEy';

export function* infoImage(){
    yield takeLatest(INFO_IMAGE_REQUEST,infoImageSaga)
}

const getDataInfoImage = (imgId) => {
    const linkInfoImage = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${ApiKey}&photo_id=${imgId}&secret=&format=json&nojsoncallback=1`

    return axios({
        method: "GET",
        url: linkInfoImage
    })
    .then(response => response.data)
    .catch(error => console.log(error))
}

function* infoImageSaga(infoImageAction){
    try {
        const dataInfoImage = yield call(getDataInfoImage, infoImageAction.payload)
        // console.log("info: ",dataInfoImage)
        const descriptionImage = dataInfoImage.photo.description._content;
        const titleImage = dataInfoImage.photo.title._content
        const usernameImage = dataInfoImage.photo.owner.username
    yield put(infoImageSuccess(descriptionImage,titleImage,usernameImage))
    } catch (error) {
        yield put(infoImageError(error))
    }
    
}