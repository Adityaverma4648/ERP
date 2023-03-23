import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import featureReducer from "./features/featureSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    feature: featureReducer,
  },
});