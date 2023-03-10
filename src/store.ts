import { postReducer } from './redux/data/reducer';
import { addPostReducer, deletePostReducer } from './redux/functional/reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';



const reducer = {postReducer,addPostReducer, deletePostReducer }
const middleware = getDefaultMiddleware({
    immutableCheck:false,
    thunk:true,
})

export const store = configureStore({reducer, middleware})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;