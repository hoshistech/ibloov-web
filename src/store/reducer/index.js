import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["allevents"],
// };
// export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const middleware = [thunk];

export const setupStore = (reducer) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
    // reducer
  );
};

// export const persistor = persistStore(setupStore());
// export default setupStore;
