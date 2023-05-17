import { combineReducers } from "redux";
import { authReducer } from "./auth/authreducer";
import { profileReducer } from "./profile/reducers";
import { enrollmentReducer } from "./enrollments/reducers";
export default combineReducers({
    authReducer,
    profileReducer,
    enrollmentReducer
})