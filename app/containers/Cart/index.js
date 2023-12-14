/**
 *
 * Cart
 *
 */

import React, { memo ,useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCart, { makeSelectTableArray } from './selectors';
import {storeTable, tableData } from './actions';

import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
 import './Cart.css'
 import mars from '../../images/Mars-logo.png'
//  import marsheart from '../../images/mars-heart1.png'
 import marsside from '../../images/mars-heart1_files/choclate.png'
// import history from '../../utils/history';



export function Cart({tableData,dataSet}) {
  useInjectReducer({ key: 'cart', reducer });
  useInjectSaga({ key: 'cart', saga });

  useEffect(() => {
    try {
      tableData();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }, []);
  
  console.log(1)
  const [cartsData, setCartsData] = useState([   
    { id: 1, category: 'MILKY-BAR', year: [2018, 2019, 2020, 2021,2022], sales: [   162,162,162,177,180], profit: [ 40,  40,42,50,61], viewMode: 'table',columns: []},
    { id: 2, category: 'BOUNTY', year: [2018, 2019, 2020, 2021,2022], sales:  [ 183, 161, 143, 139, 160], profit:[ 55, 61, 41, 33, 41], viewMode: 'table' ,columns: []},
    { id: 3, category: 'GALAXY', year: [2018, 2019, 2020, 2021,2022], sales: [   201,215,187,179,195], profit: [  70,69,49,45,73], viewMode: 'table',columns: []},
    { id: 4, category: 'SNICKERS', year: [2018, 2019, 2020, 2021,2022], sales: [    180,196,171,169,210], profit: [  61,  69,46, 42,75], viewMode: 'table',columns: [] },
  ]); 
  // const [Data, setCartsData] = useState(dataSet)
  
  // console.log(dataSet, 'dataSet');

  const [selectedCartId, setSelectedCartId] = useState(1);

  const handleToggleClick = () => {
    setCartsData(cartsData.map(cart => {
      if (cart.id === selectedCartId) {
        return { ...cart, viewMode: cart.viewMode === 'table' ? 'graph' : 'table' };
      } else {
        return cart;
      }
    }));
  }

  const renderCartButton = (cart) => {
    const isSelected = cart.id === selectedCartId;

    return (
      <button
        key={cart.id}
        className='cart-btn'        style={{backgroundColor: isSelected ? 'grey' : 'white'}}
        onClick={() => setSelectedCartId(cart.id)}
        title='Click Here'
      >
        {cart.category} 
      </button>
    );
  }


  const renderCart = (cart) => {
    
      const handleAddColumn = () => {
        const newColumn = {
          year: new Array(cart.year.length).fill(''),
          sales: new Array(cart.sales.length).fill(''),
          profit: new Array(cart.profit.length).fill('')
        };
        const newColumns = cart.columns.length > 0 ? [...cart.columns, newColumn] : [newColumn];
      
        // const newColumns = [...cart.columns, newColumn];
      
        const newCart = {
          ...cart,
          columns: newColumns
        };
      
        setCartsData(cartsData.map(currentCart => (currentCart.id === cart.id ? newCart : currentCart)));
      };
    return (
      <div key={cart.id}>
        {cart.viewMode === 'table' ? (
          <div className='table-container'>
            <h2 style={{ margin: 20 }}>{cart.category} DATA</h2>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Sales</th>
                  <th>Profit</th>
                  {cart.columns.map((column, index) => (
                    <th key={index}>Column {(index+3) + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cart.year.map((year, index) => (
                  <tr key={index}>
                    <td>{year}</td>
                    <td>{cart.sales[index]}</td>
                    <td>{cart.profit[index]}</td>
                    {cart.columns.map((column, colIndex) => (
                      <td key={colIndex}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => handleAddColumn()}>Add Column</button>
          </div>
        ) : (
          <div style={{ margin: '0 auto', width: 600 }}>
          <LineChart width={600} height={400} data={cart.year.map((value, index) => ({ year: value, sales: cart.sales[index], profit: cart.profit[index] }))}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey="sales" stroke="#0a7579" name={`${cart.category} sales `}/>
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" name={`${cart.category} profit`}/>
           </LineChart>
          </div>
        )}
      </div>
    );
  };
  
  const selectedCart = cartsData.find(cart => cart.id === selectedCartId);

  return (
      <div>
        <nav className='nav-style'>
          <img className='image' src={mars}/>
          <img className='image2' src={marsside}/>
          {/* <p>Welcome Mars!</p> */}
          <div className='nav-items'>
          {/* <a href='Cart' className='nav-link'>View</a> */}
          <a href='#' className='nav-link'>View</a>

          <a href='#' className='nav-link2'>About</a>
          <a href='\logout' className='logout-btn'>Logout</a>
          {/* <img className='image' src={marsheart}/> */}
          </div>
        </nav>
    <div className='cart-container'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {cartsData.map(cart => renderCartButton(cart))}
      </div>
      <div>
        <div style={{ margin: '40px 0',textAlign:'left' }} onClick={handleToggleClick}>
          {selectedCart.viewMode === 'table' ? <button className='toggle-off'>⚫</button>: <button className='toggle-on' >⚪</button>}
        </div>
        {renderCart(selectedCart)}
      </div>
    </div>
    </div>
  );
}

Cart.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cart: makeSelectCart(),
  dataSet: makeSelectTableArray(),

});

function mapDispatchToProps(dispatch) {
  return {
    storeTable: (dataSet) => dispatch(storeTable(dataSet)),
    tableData: () => dispatch(tableData()),
    dispatch
    
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cart);
