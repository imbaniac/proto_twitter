import { connect } from 'react-redux';
import TweetList from '../components/TweetList';
import { commentTweet } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onCommentSubmit: (comment, id) => {
            dispatch(commentTweet(comment, id))
        }
    }
}

const ListOfTweets = connect(mapStateToProps, mapDispatchToProps)(TweetList);

export default ListOfTweets;
