import { MiddlewareArray, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import {twitterCoreApi} from './services/twitterCore'

// export const store = configureStore({
//   reducer: {
// import {twitterCoreApi} from './services/twitterCore'
//     [twitterCoreApi.reducerPath] : twitterCoreApi.reducer,
//     player: playerReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(twitterCoreApi.middleware)

// }
// );


export const store = configureStore({
  reducer: {
    [twitterCoreApi.reducerPath]: twitterCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(twitterCoreApi.middleware),
});