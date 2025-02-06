// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// import user from './slices/foodListSlice';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['cartList', 'favoriteList', 'orderHistory', 'currentOrderList'] // slices to persist
// }

// // I combine reducers for more clear code
// const rootReducer = combineReducers({
//   foodList: foodListReducer,
//   cartList: cartListReducer,
//   favoriteList: favoriteListReducer,
//   orderHistory: orderHistoryReducer,
//   currentOrderList: currentOrderListReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import user from './user/slice';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import { extendedApi } from "../services/RTKQuery/endpoints";
import {setupListeners} from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'user',
    //  "app", "auth", "lesson" // your other states
  ],
};

const rootReducer = combineReducers({
  user,
  //   app,
  //   auth,
  //   lesson,
  //   [extendedApi.reducerPath]: extendedApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(extendedApi.middleware) as any,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store};
