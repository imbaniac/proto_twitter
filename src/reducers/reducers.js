import { ADD_TWEET, COMMENT_TWEET, AUTH_USER } from '../actions/actions';
import { combineReducers } from 'redux';

function tweets(state = [], action){
	switch(action.type){
        case ADD_TWEET:
			return [
				...state, {
					comments: []
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

        default:
            return state;
    }
}

function users(state = [], action){
    switch(action.type){
		case AUTH_USER:
			return [
				...state, {
					login: action.login,
                    tweets: action.tweets,
                    comments: action.comments
                }
			]
    }
}
const tweetApp = combineReducers({ users });

export default tweetApp;
