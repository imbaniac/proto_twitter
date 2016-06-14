import React from 'react';
import { connect } from 'react-redux';
import { addTweet } from '../actions/actions';

let AddTweet = ({ dispatch, users }) => {
  let input;
  let currentUser = users[users.length-1];
  return (
    <div>
      <form className="tweetForm" onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addTweet(input.value, currentUser.login));
        input.value = '';
      }}>
        <textarea ref={node => {
          input = node;
	  }} placeholder="Your words will become history. No, they won't *_* "/>
        <button type="submit">
          Tweet
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

AddTweet = connect(mapStateToProps)(AddTweet)

export default AddTweet;
