/*
 *
 * Cart reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,STORE_TABLE_DATA, TABLE_DATA  } from './constants';

export const initialState = {
  dataSet: [],
};

/* eslint-disable default-case, no-param-reassign */
const cartReducer = (state = initialState, action) =>
produce(state, draft => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
    case TABLE_DATA:
      break;
    case STORE_TABLE_DATA:
      draft.dataSet = action.dataSet;
      console.log('dataSet', draft.dataSet);
      break;
  }
});
export default cartReducer;
// console.log(dataSet)

