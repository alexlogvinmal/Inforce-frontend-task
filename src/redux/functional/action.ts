import { ADD_POST, Addpost, AddPostActionTypes, DELETE_POST, DeletePostState, DeletePostActionTypes } from '../types';
import axios from 'axios';


export function addPost(post: Addpost): AddPostActionTypes {
  return {
    type: ADD_POST,
    payload: post,
  };
}

export function createPost(post: Addpost) {
  return async function (dispatch: any) {
    const response = await axios.post('http://localhost:8000/data', post);
    dispatch(addPost(response.data));
  };
}

export function deleteId(id: DeletePostState): DeletePostActionTypes {
  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function deletePost(id: number) {
  return async function (dispatch: any) {
    const response = await axios.delete(`http://localhost:8000/data/${id}`);
    dispatch(deleteId(response.data));
  };
}