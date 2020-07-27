import { all, fork } from "redux-saga/effects";
import {searchImage} from './image/searchImage/searchImage';
import {sizeImage} from './image/getSizeImage/getSizeImage';
import {infoImage} from './image/infoImage/infoImage';

export default function* rootSaga() {
    yield all([
        fork(searchImage),
        fork(sizeImage),
        fork(infoImage)
    ])
}