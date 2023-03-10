export interface Post {
    id: number,
    imageUrl: string,
    name: string,
    count: number,
    size:{
        width: number,
        height: number
    },
    weight: string,
    comments: [{
        id: number,
        productId: number,
        description: string,
        date: string
    }]
  }
  
  export interface PostState {
    data: Post[];
    loading: boolean;
    error: string | null;
  }
  
  export enum PostActionTypes {
    FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED',
  }

////////////add

  export interface Addpost {
    imageUrl: string,
    name: string,
    count: number,
    size:{
        width: number,
        height: number
    },
    weight: string
  }
  
  export interface AddPostState {
    posts: Addpost[];
  }
  
  export const ADD_POST = 'ADD_POST';
  
  interface AddPostAction {
    type: typeof ADD_POST;
    payload: Addpost;
  }
  
  export type AddPostActionTypes = AddPostAction;

//////////////////delete

  export interface DeletePostState {
    id: number;
  }
  
  export const DELETE_POST = 'DELETE_POST';
  
  interface DeletePostAction {
    type: typeof DELETE_POST;
    payload: DeletePostState;
  }
  
  export type DeletePostActionTypes = DeletePostAction;