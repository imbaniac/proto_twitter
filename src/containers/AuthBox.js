import React from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions/actions';

let AuthBox = ({ dispatch }) => {
	let input;
	return (
		<div>
	      <form className="login" onSubmit={e => {
	        e.preventDefault();
	        if (!input.value.trim()) return;
	        dispatch(authUser(input.value));
	        input.value = '';
	      }}>
	        <input ref={node => {
	          input = node;
		  }} placeholder="YOUR NAME PLEASE???"/>
	        <button type="submit">
	          Login
	        </button>
	      </form>
	    </div>
	)
}

AuthBox = connect()(AuthBox)

export default AuthBox;
