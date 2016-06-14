import { ADD_TWEET, COMMENT_TWEET, AUTH_USER } from '../actions/actions';
import { combineReducers } from 'redux';

function tweets(state = [], action){
    switch(action.type){
        case ADD_TWEET:
            return [
                ...state, {
                    id: action.id,
                    tweet: action.tweet,
                    comments: action.comments,
                    createdAt: action.createdAt
                }
            ]
        case COMMENT_TWEET:
            return state.map((tweet, index) => {
                if(index === action.index){
                    return Object.assign({}, tweet, {
                        comments: tweet.comments.concat(action.comment)
                    })
                }
                return tweet;
            })
		case AUTH_USER:

        default:
            return state;
    }
}
const tweetApp = combineReducers({ tweets });

export default tweetApp;
