import { UserLocationState } from './types';
import { UserLocationActionTypes } from './actions';

const initialState: UserLocationState = {latitude: undefined, longitude: undefined};

export const userLocationReducer = (state = initialState, action: UserLocationActionTypes): UserLocationState => {
  switch (action.type) {
    case 'MARK_USER_LOCATION': {
      return action.payload
    }
    case 'CLEAR_USER_LOCATION': {
      return { latitude: undefined, longitude: undefined }
    }
    default:
      return state;
    }
};