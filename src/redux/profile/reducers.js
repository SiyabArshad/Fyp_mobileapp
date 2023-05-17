import ProfileConstants from "./constants";
const initialState = {
    profile: null,
  };
  
  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case ProfileConstants.getProfile:
        return {
          ...state,
          profile: action.payload,
        };
      default:
        return state;
    }
  };