import { createAsyncAction } from 'typesafe-actions';
import { Post } from './types';

export const loadPostsAsync = createAsyncAction(
  'LOAD_POSTS_REQUEST',
  'LOAD_POSTS_SUCCESS',
  'LOAD_POSTS_FAILURE'
)<void, Post[], string>();
