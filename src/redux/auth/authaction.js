import { authContants } from "./constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getCurrentuser = () => {
  return async (dispatch) => {
    const jsonValue = await AsyncStorage.getItem("digiSchool");
    const currentuser = jsonValue != null ? JSON.parse(jsonValue) : null; //data will come form async storage
    dispatch({
      type: authContants.currentuser,
      payload: currentuser,
    });
  };
};

export const loginaction = (payload) => {
  return {
    type: authContants.login,
    payload: payload,
  };
};

export const logoutaction = () => {
  return async (dispatch) => {
    //logic comes here
    await AsyncStorage.removeItem("digiSchool");
    dispatch({
      type: authContants.logout,
    });
  };
};
