import React from 'react';
import { connect } from 'react-redux';
import { addTweet } from '../actions/actions';

let AddTweet = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form className="tweetForm" onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addTweet(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
	  }} placeholder="Your words will become history. No, they won't *_* "/>
        <button type="submit">
          Tweet
        </button>
      </form>
    </div>
  )
}
AddTweet = connect()(AddTweet)

export default AddTweet;
