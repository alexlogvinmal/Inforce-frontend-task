import { AddPostState, ADD_POST, DELETE_POST,  DeletePostState} from '../types';

const initialState: AddPostState = {
  posts: [],
};

const delState: DeletePostState = {
  id: 0,
};

export function addPostReducer(state = initialState, action: any): AddPostState {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
}

export function deletePostReducer(state = delState, action: any): DeletePostState {
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state, 
      };
    default:
      return state;
  }
}