import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import request from "../../utils/request";
import { TABLE_DATA } from './constants';

import { storeTable } from './actions';

// import { makeSelectCartsData } from './selectors'; 

// Individual exports for testing
export default function* cartSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(TABLE_DATA, tableData);
}



export function* tableData() {
  const APIUrl = 'http://127.0.0.1:8000/page/webpage/view/';

  
  const jsonData = yield call(request, APIUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  
  });
  yield put(storeTable(jsonData));
  console.log("in saga",jsonData)

}

