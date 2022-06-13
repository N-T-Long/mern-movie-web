import { call, put, takeEvery } from "redux-saga/effects";
import publicApi from "../../api/publicApi";
import { publicActions } from "../slice/public";

function* handleFetchPublicData(action) {
  try {
    const resCountries = yield call(publicApi.getCountries, {});

    const resGenres = yield call(publicApi.getGenres, {});

    const resSlides = yield call(publicApi.getSlides, {});

    yield put(
      publicActions.loadedPublicData({
        countries: resCountries.countries,
        genres: resGenres.genres,
        slides: resSlides.slides,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export default function* publicSaga() {
  yield takeEvery(publicActions.loadingData.type, handleFetchPublicData);
}
