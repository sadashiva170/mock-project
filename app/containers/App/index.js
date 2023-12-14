/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import history from '../../utils/history';

import GlobalStyle from '../../global-styles';
import Form from '../Form';
// import  Cart  from '../Cart';
import Cart from '../Cart';
// import  HomePage from '../HomePage';
// import { Cart } from '../Cart';

// import  Navbar  from '../Navbar';
// import  Carts  from '../Carts';
import CryptoJS from 'crypto-js/core';

import AES from 'crypto-js/aes';

import Utf8 from 'crypto-js/enc-utf8';
4;

export default function App() {
  useEffect(() => {
    const secretKey = 'mySecretKey123';

    // Get the encrypted value of isLoggedIn from sessionStorage

    const encryptedValue = sessionStorage.getItem('isLoggedIn');

    if (!encryptedValue) {
      // If the value is not set, redirect to the login page

      history.push('/');

      return;
    }

    // Decrypt the value using AES decryption with the secret key

    const decryptedValue = AES.decrypt(encryptedValue, secretKey).toString(
      Utf8,
    );

    // Convert the decrypted value back to a boolean

    const isLoggedIn = decryptedValue === 'true';

    if (!isLoggedIn) {
      // If isLoggedIn is false, redirect to the login page

      history.push('/');
    }
  }, []);

  // console.log(dataSet, 'dataset')

  return (
    <React.Fragment>
      <Switch>
        {/* <Route exact path="/" render={() => <Form history={history} />} />
        <Route exact path="/login" render={() => <Cart history={history} />} /> */}
        <Cart/>
        <Route exact path="/logout" component={Form} />
      </Switch>
    </React.Fragment>
  );
}
