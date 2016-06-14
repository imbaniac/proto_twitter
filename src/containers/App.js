import React from 'react';
import AddTweet from '../containers/AddTweet';
import ListOfTweets from '../containers/ListOfTweets';
import AuthBox from '../containers/AuthBox';
import { connect } from 'react-redux';

class App extends React.Component {
	componentDidUpdate() {}
	render(){
		return (
		  <div className="main">
		  	{this.props.users.length ? <AddTweet /> : <AuthBox />}
		    <ListOfTweets />
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App)
