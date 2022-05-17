import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import projectsReducer from "./slices/projectsSlice";
import formReducer from "./slices/formSlice";
import userReducer from "./slices/userSlice";
import gatewayReducer from "./slices/gatewaySlice";
import reportsReducer from "./slices/reportsSlice";

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    form: formReducer,
    users: userReducer,
    gateways: gatewayReducer,
    reports: reportsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
