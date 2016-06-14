import React from 'react';
import AddTweet from '../containers/AddTweet';
import ListOfTweets from '../containers/ListOfTweets';

const App = () => (
  <div className="main">
    <AddTweet />
    <ListOfTweets />
  </div>
)

export default App;
