/*
 *
 * Form actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_USERNAME,
  SET_PASSWORD,
  FETCH_LOGIN_DATA,
  STORE_JSON_VALUE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setUserName(userName) {
  return {
    type: SET_USERNAME,
    userName,
  };
}

export function setPassWord(passWord) {
  return {
    type: SET_PASSWORD,
    passWord,
  };
}

export function fetchData() {
  return {
    type: FETCH_LOGIN_DATA,
  };
}

export function storeJson(data) {
  return {
    type: STORE_JSON_VALUE,
    data,
  };
}

