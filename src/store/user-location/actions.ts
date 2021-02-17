import { UserLocationState } from './types';

export const markUserLocation = (location: UserLocationState) => {
  return <const>{
    type: 'MARK_USER_LOCATION',
    payload: location,
  };
};

export const clearUserLocation = () => {
  return<const> {
    type: 'CLEAR_USER_LOCATION',
  };
};

export type UserLocationActionTypes = ReturnType<typeof markUserLocation | typeof clearUserLocation>;