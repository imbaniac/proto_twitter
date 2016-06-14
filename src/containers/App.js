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
		  	{this.props.users.find(user=> user.isCurrent) ? <AddTweet /> : <AuthBox />}
		    <ListOfTweets />
		  </div>
		);
	}
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps)(App)
