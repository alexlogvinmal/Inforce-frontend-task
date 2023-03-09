import { PostActionTypes, PostState } from '../types';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action: any): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case PostActionTypes.FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};