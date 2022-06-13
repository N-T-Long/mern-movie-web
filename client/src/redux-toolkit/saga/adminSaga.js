import { call, put, takeEvery } from "redux-saga/effects";
import publicApi from "../../api/publicApi";
import adminApi from "../../api/adminApi";
import { publicActions } from "../slice/public";
import { adminActions } from "../slice/admin";

function* handleFetchMovieList(action) {
  try {
    const res = yield call(publicApi.getMovies, {});
    yield put(adminActions.fetchMovieListSuccess(res.movies));
  } catch (error) {
    console.log(error);
    yield put(adminActions.fetchMovieListFailed);
  }
}

export default function* adminSaga() {
  yield takeEvery(adminActions.fetchMovieList.type, handleFetchMovieList);
}
