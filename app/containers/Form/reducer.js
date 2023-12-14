/*
 *
 * Form reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,SET_USERNAME,SET_PASSWORD,  FETCH_LOGIN_DATA, STORE_JSON_VALUE,} from './constants';

export const initialState = {
  userName:'',
  passWord:'',
  data:[],

};

/* eslint-disable default-case, no-param-reassign */
const  formReducer= (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_USERNAME:
        draft.userName = action.userName;
        break;
      case SET_PASSWORD:
        draft.passWord = action.passWord;
        break;
      case FETCH_LOGIN_DATA:
        break;
      case STORE_JSON_VALUE:
        draft.data = action.data;
    }
  });


export default formReducer;
