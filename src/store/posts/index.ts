import { createReducer } from 'typesafe-actions';
import produce from "immer";
import { Post } from './types';
import {loadPostsAsync} from './actions';

export type State = {
  items: Post[],
  isLoading: boolean,
  hasError:boolean,
}

const INITIAL_STATE :State = {
  items: [],
  isLoading: false,
  hasError: false
}

const reducer = createReducer(INITIAL_STATE)
  .handleAction(loadPostsAsync.request, produce((draft) => {
    draft.isLoading = true;
    draft.hasError = false;
  }))
  .handleAction(loadPostsAsync.success, produce((draft, {payload}:ReturnType<typeof loadPostsAsync.success>) => {
    draft.items = payload;
    draft.isLoading = false;
    draft.hasError = false;
  }))
  .handleAction(loadPostsAsync.failure, produce((draft, {payload}:ReturnType<typeof loadPostsAsync.failure>) => {
    draft.items = [];
    draft.isLoading = false;
    draft.hasError = true;
  }));
export default reducer;
