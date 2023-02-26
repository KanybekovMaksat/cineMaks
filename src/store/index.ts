import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./slices/userSlice";
import favoritesReducer from "./slices/favoriteSlice";
import moviesReducer from "./slices/fetchSlice";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const favoritesPersistReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

const store = configureStore({
  reducer: combineReducers({
    movies: moviesReducer,
    user: userReducer,
    favorites: favoritesPersistReducer,
  }),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;