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
  
  export enum LogInActionTypes {
    SUCCESS_LOGIN = 'SUCCESS_LOGIN',
    LOGOUT_LOGIN = 'LOGOUT_LOGIN',
  }
  
  export interface LogInStatus {
    status: boolean;
  }