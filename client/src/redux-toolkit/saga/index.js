import { legacy_createStore } from "redux";
import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import movieSaga from "./movieSaga";
import publicSaga from "./publicSaga";
import adminSaga from "./adminSaga";

export default function* rootSaga() {
  console.log("root saga");
  yield all([movieSaga(), authSaga(), publicSaga(), adminSaga()]);
}
