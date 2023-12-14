/**
 *
 * Form
 *
 */

import React, { memo} from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectForm, {makeSelectUserName,makeSelectPassWord,makeSelectDataArray} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { setUserName, setPassWord, fetchData } from './actions';

import  { useState ,useEffect} from "react";
import "./Form.css";
import Mars from "../../images/Mars-logo.png"
export function Form({userName,passWord,setUserName,setPassWord,fetchData,data}) {
  useInjectReducer({ key: 'form', reducer });
  useInjectSaga({ key: 'form', saga });



  

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const history = useHistory();

  console.log(userName, passWord, data, 'userName,passWord,data');
  // useEffect(() => {
  //   fetchData();
  // },[]);


  const updateUserName = (event) => {
    setUserName(event.target.value);  
  };

  const updatePassword = (event) => {
    setPassWord(event.target.value);
  };

  const handleValidation =  (event) => {
    event.preventDefault();
  
    let usernameValidation = true;
    let passwordValidation = true;
  
    // Username validation
    if (userName.trim() === "") {
      setUsernameError("Please enter a username.");
      usernameValidation = false;
    } else if (userName.length < 3) {
      setUsernameError("Username must be at least 3 characters long.");
      usernameValidation = false;
    } else {
      setUsernameError("");
    }
  
    // Password validation
    if (passWord.trim() === "") {
      setPasswordError("Please enter a password.");
      passwordValidation = false;
    } else if (passWord.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      passwordValidation = false;
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/.test(passWord)) {
      setPasswordError("Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
      passwordValidation = false;
    } else {
      setPasswordError("");
    }
  
    if (usernameValidation && passwordValidation) {
          try {
             fetchData();

            // if (data.status === "success") {
            //   history.push('/login');
            // } else {
            //   throw new Error("Login failed. Please check the credentials.");
            // }
          } catch (error) {
            alert("Login failed");
            // alert(error.message);
            console.log(error)
          }
    }
  };
  

  return (
    <div className='App'>
      <header className='App-header'>
      <div className="">
        <img src={Mars} className='mars-logo' />
      <h1 className="heading">Welcome Mars</h1>
<form>
<div>
      <label htmlFor="userName" style={{fontSize:17}}>Username:</label>      
      <input
        type="text"
        placeholder="userName"
        name="userName"
        className="input-box"
        value={userName}
        onChange={updateUserName}
        />
        </div>
        

      <span style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>{usernameError}</span>

        
        
<div>

      <label htmlFor="passWord" style={{fontSize:17}}>Password:</label>
      <input
        type="passWord"
        placeholder="passWord"
        name="passWord"
        className="input-box"
        value={passWord}
        onChange={updatePassword}
        /><br></br>
        </div>
      <span style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>{passwordError}</span>
        
</form>
      <div className='btn-box'>
       <button className="login-btn" onClick={handleValidation}>Login</button>
      </div>
   
    </div>
      </header>
    </div>
  );
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  form: makeSelectForm(),
  userName: makeSelectUserName(),
  passWord: makeSelectPassWord(),
  data: makeSelectDataArray(),
});
function mapDispatchToProps(dispatch) {
  return {
    setUserName: userName => dispatch(setUserName(userName)),
    setPassWord: passWord => dispatch(setPassWord(passWord)),
    fetchData: () => dispatch(fetchData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Form);






