// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { FETCH_LOGIN_DATA } from './constants';
import { push } from 'connected-react-router';

import { makeSelectUserName, makeSelectPassWord } from './selectors';
// import { storeJson } from './actions';
import request from "../../utils/request";
// import { useHistory } from 'react-router-dom';
// import request from '../../utils/request';
import history from '../../utils/history';
import CryptoJS from 'crypto-js/core';

import AES from 'crypto-js/aes';

import Utf8 from 'crypto-js/enc-utf8';



// Individual exports for testing
export default function* formSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_LOGIN_DATA, fetchData);
}

export function* fetchData() {

  // Define a secret key for encryption

    const secretKey = 'mySecretKey123';




    // Get the value of `isLoggedIn`
  
    const isLoggedIn = true;
  
  
  
  
    // Convert the value to a string
  
    const isLoggedInStr = isLoggedIn.toString();
  
  
  
  
    // Encrypt the value using AES encryption with the secret key
  
    const encryptedValue = AES.encrypt(isLoggedInStr, secretKey).toString();

  const username = yield select(makeSelectUserName());
  const password = yield select(makeSelectPassWord());
  const APIUrl = 'http://127.0.0.1:8000/page/login/';
  
  const body = {
    username,
    password
  }
  console.log("BODY",body)
  
  const jsonData = yield call(request, APIUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    //  mode: 'no-cors',
  });
  // yield put(storeJson(jsonData));
  // const history = useHistory();
  if(jsonData.status==='success'){
        sessionStorage.setItem('isLoggedIn', encryptedValue);
    history.push('/login');
  }
  else{
    alert("Login failed. Please check the credentials.");
  }
}