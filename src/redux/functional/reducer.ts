import { LogInActionTypes, LogInStatus } from '../types';

const initialState: LogInStatus = {
  status: false
};

export const loginReducer = (state = initialState, action:any): LogInStatus => {
  switch (action.type) {
    case LogInActionTypes.LOGOUT_LOGIN:
      return {
        ...state,
        status: false
      };
    case LogInActionTypes.SUCCESS_LOGIN:
      return {
        ...state,
        status: true
      };
    default:
      return state;
  }
};
