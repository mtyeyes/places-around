import { createStore, combineReducers, $CombinedState } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLocationReducer } from './user-location/reducers';

const rootReducer = combineReducers({
  userLocation: userLocationReducer,
});

const configureStore = (preloadedState: {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(),
  )
);

const store = configureStore({});

export type AppState = ReturnType<typeof rootReducer>;
export type AppStateKeys = Exclude<keyof AppState, typeof $CombinedState>;
export type AppDispatch = typeof store.dispatch;

export default store;