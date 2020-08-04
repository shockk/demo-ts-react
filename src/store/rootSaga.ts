import { spawn } from "redux-saga/effects"
import postsSaga from "./posts/sagas";

export default function* rootSaga() {
  yield spawn(postsSaga);
}
