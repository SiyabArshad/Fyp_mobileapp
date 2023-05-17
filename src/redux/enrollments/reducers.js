import EnrollmentsConstants from "./constant";
const initialState = {
    data: [],
  };
  
  export const enrollmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case EnrollmentsConstants.getEnrollments:
        return {
          ...state,
            data: action.payload,
        };
      default:
        return state;
    }
  };