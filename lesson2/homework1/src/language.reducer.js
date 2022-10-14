import { SET_LANGUAGE } from "./language.actions";

const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      const newLang = action.payload.language;
      return newLang;
    }
    default:
      return state;
  }
};

export default languageReducer;
