import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filters/slice";
import recipeReducer from "./recipes/slice";
import favoriteReducer from "./favorites/slice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  filter: filterReducer,
  favorite: favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
