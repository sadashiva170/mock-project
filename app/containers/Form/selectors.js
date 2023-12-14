import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the form state domain
 */

const selectFormDomain = state => state.form || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Form
 */

const makeSelectForm = () =>
  createSelector(
    selectFormDomain,
    substate => substate,
  );

const makeSelectUserName = () =>
  createSelector(
    selectFormDomain,
    substate => substate.userName,
  );

const makeSelectPassWord = () =>
  createSelector(
    selectFormDomain,
    substate => substate.passWord,
  );

const makeSelectDataArray = () =>
  createSelector(
    selectFormDomain,
    substate => substate.data,
  );

export default makeSelectForm;
export { selectFormDomain ,makeSelectUserName, makeSelectPassWord, makeSelectDataArray };
