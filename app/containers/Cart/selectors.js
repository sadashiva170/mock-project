import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cart state domain
 */

const selectCartDomain = state => state.cart || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cart
 */

const makeSelectCart = () =>
  createSelector(
    selectCartDomain,
    substate => substate,
  );
const makeSelectTableArray = () =>
  createSelector(
    selectCartDomain,
    substate => substate.dataSet,
  );
    


export default makeSelectCart;
export { selectCartDomain,makeSelectTableArray};
