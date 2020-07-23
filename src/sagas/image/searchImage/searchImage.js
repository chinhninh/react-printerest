import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {SEARCH_IMAGE_REQUEST} from '../../../redux/actions/image/searchImage/actionType';
import {searchImageSuccess, searchImageError} from '../../../redux/actions/image/searchImage/actionCreator';
import ApiKey from '../../../api/ApiKEy';

export function* searchImage() {
    yield takeLatest(SEARCH_IMAGE_REQUEST,searchImageSaga)
}

const getSearchImage = (valueSearch) => {
    // var config = {
    //     headers: {'Access-Control-Allow-Origin': '*'}
    // }
    // const linkSearchImage = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&text=${valueSearch}&format=json`
    const linkSearchImage = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&text=${valueSearch}&format=json&nojsoncallback=1`;

    return axios({
        method: "GET",
        url: linkSearchImage
    })
    .then(response => response.data)
    .catch(error => console.log(error))

    // return fetch(linkSearchImage, {
    //     method: "GET"
    // })
    // .then(response => response.json())
    // .catch(error => console.log(error))
}

function* searchImageSaga(searchImageAction) {
    try {
        const dataSearchImage = yield call(getSearchImage, searchImageAction.payload);
        // console.log(dataSearchImage.photos.photo)
        yield put(searchImageSuccess(dataSearchImage.photos))
        
    } catch (error) {
        yield put(searchImageError(error))
    }
}