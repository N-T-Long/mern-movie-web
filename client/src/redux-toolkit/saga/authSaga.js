import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects";
import authApi from "../../api/authApi";
import userApi from "../../api/userApi";
import { authActions } from "../slice/auth";

function* handleIsLoggedIn() {
  // Get profile user when user is logged
  const res = yield userApi.getProfile();
  const user = res.user;
  yield put(authActions.logginSuccess(user));
}

function* handleLogin(action) {
  try {
    const res = yield call(authApi.loggin, action.payload);
    if (res.success) {
      localStorage.setItem("token", res.accessToken);
      yield delay(500);
      yield alert("Đăng nhập thành công");
      yield call(handleIsLoggedIn);
    } else {
      yield alert("Sai tài khoản hoặc mật khẩu");
      yield put(authActions.loginFailed);
    }
  } catch (error) {
    console.log(error);
    yield put(authActions.loginFailed);
  }
}

function* handleRegister(action) {
  try {
    const res = yield call(authApi.register, action.payload);
    console.log("res", res);
    localStorage.setItem("token", res.accessToken);
    yield delay(500);
    yield alert("Đăng ký thành công");
    yield call(handleIsLoggedIn);
  } catch (error) {
    console.log(error);
    yield put(authActions.registerFailed);
  }
}

function* handleLogout(action) {
  yield localStorage.removeItem("token");
}

function* watchLoginFlow(action) {
  while (true) {
    //Check user is logged or not, if false handle login
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    if (!isLoggedIn) {
      yield takeEvery(authActions.login.type, handleLogin);
    }

    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);

  // Check user is logged and fectch user profile
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  if (isLoggedIn) {
    yield call(handleIsLoggedIn);
  }
  yield takeEvery(authActions.reloadData.type, handleIsLoggedIn);
  yield takeEvery(authActions.register.type, handleRegister);
}
