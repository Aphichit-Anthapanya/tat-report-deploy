/* use some of store example from https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit-typescript */
/* eslint-disable global-require */
import { combineReducers } from "redux";
import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
} from "@reduxjs/toolkit";
import config from "@/config/env";

/* import reducer here */
import { userApi } from "./services/user";
import { procurementApi } from "./services/procurement";
import { masterDataApi } from "./services/master-data"
import { operationFollowApi } from "./services/operation-follow-api"
import { counterSlice } from "./countersSlice/counterSlice";
import operationFollowFormReducer from "./OperationFollow/reducer";
import operationFollowTableReducer from "./OperationFollowTable/reducer-follow-table";
import procurementReducer from "./Procurement/reducer";

let additionalMiddleware: Middleware[] = [userApi.middleware,masterDataApi.middleware,operationFollowApi.middleware];

if (config.isDevEnv) {
  const logger = require("redux-logger").default;
  additionalMiddleware = [...additionalMiddleware, logger];
}

// self combine reducer because we need setting before persist
const rootReducer = combineReducers({
  /* add reducer here */
  [userApi.reducerPath]: userApi.reducer,
  [masterDataApi.reducerPath]: masterDataApi.reducer,
  [operationFollowApi.reducerPath]: operationFollowApi.reducer,
  [procurementApi.reducerPath]: procurementApi.reducer,
  counter: counterSlice.reducer,
  operationFollowForm: operationFollowFormReducer,
  operationFollowTable: operationFollowTableReducer,
  procurement: procurementReducer,
});

function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({})
        .prepend
        // correctly typed middlewares can just be used
        // you can also type middlewares manually
        ()
        // prepend and concat calls can be chained
        .concat(additionalMiddleware),
    devTools: config.isDevEnv,
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
