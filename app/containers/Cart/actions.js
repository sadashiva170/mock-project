/*
 *
 * Cart actions
 *
 */

import { DEFAULT_ACTION,TABLE_DATA,STORE_TABLE_DATA} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function tableData() {
  return {
    type: TABLE_DATA,
    
  };
}
export function storeTable(dataSet) {
  return {
    type: STORE_TABLE_DATA,
    dataSet,
    
  };
  
}
// console.log(dataSet,'dataSet');