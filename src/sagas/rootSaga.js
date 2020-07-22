import { all, fork } from "redux-saga/effects";
import {searchImage} from './image/searchImage/searchImage';
import {sizeImage} from './image/getSizeImage/getSizeImage';

export default function* rootSaga() {
    yield all([
        fork(searchImage),
        fork(sizeImage),
    ])
}