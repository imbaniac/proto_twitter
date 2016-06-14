import TweetList from '../components/TweetList';
import { connect } from 'react-redux';
import { commentTweet } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onCommentSubmit: (comment, id, author) => {
            dispatch(commentTweet(comment, id, author))
        }
    }
}

const ListOfTweets = connect(mapStateToProps, mapDispatchToProps)(TweetList);

export default ListOfTweets;
