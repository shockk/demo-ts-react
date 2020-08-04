
import { takeLatest, call } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import { loadPostsAsync } from "./actions";
import { getPosts } from "../../api";
import { ThenArg } from "typesafe-actions";

function* onLoadPostsRequest() {
  try {
    const posts: ThenArg<typeof getPosts> = yield call(getPosts);
    yield put(loadPostsAsync.success(posts));
  } catch (e) {
    // tslint:disable-next-line:no-console
    loadPostsAsync.failure(e.toString());
  }
}

export default function* saga() {
  yield takeLatest(loadPostsAsync.request, onLoadPostsRequest)
}
