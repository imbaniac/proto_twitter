import TweetList from '../components/TweetList';
import { connect } from 'react-redux';
import { commentTweet } from '../actions/actions';

const mapStateToProps = (state) => ({
	tweets: state.tweets,
	// Getting current user from all users. Can be only 1 current user
	currentUser: state.users.find(user=> user.isCurrent)
})

const mapDispatchToProps = (dispatch) => ({
        onCommentSubmit: (comment, id, author) => {
            dispatch(commentTweet(comment, id, author))
    }
})

const ListOfTweets = connect(mapStateToProps, mapDispatchToProps)(TweetList);

export default ListOfTweets;
