import { Dispatch } from 'redux';
import { PostActionTypes } from '../types';
import axios from 'axios'

export const fetchPostsRequest = () => ({
  type: PostActionTypes.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (data: any) => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsFailed = (error: string) => ({
  type: PostActionTypes.FETCH_POSTS_FAILED,
  payload: error,
});

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest()); // Визиваємо action завантаження 
    try {
      const response = await axios.get('http://localhost:8000/data');
      const data = await response.data;
      dispatch(fetchPostsSuccess(data)); // Визиваємо action коли всі дані отримані
    } catch (error:any) {
      dispatch(fetchPostsFailed(error.message)); // Визиваємо action якщо виникла помилка 
    }
  };
};