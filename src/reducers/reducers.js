import { ADD_TWEET, COMMENT_TWEET, AUTH_USER } from '../actions/actions';
import { combineReducers } from 'redux';


function tweets(tweets = [], action ){
	switch(action.type){
		case ADD_TWEET:
            return [
				...tweets, {
                    id: action.id,
                    tweet: action.tweet,
					owner: action.owner,
                    comments: action.comments,
                    createdAt: action.createdAt
                }
			];
        case COMMENT_TWEET:
            return tweets.map((tweet, index) => {
                if(index === action.index){
                    return Object.assign({}, tweet, {
                        comments: tweet.comments.concat(action.comment)
                    })
                }
                return tweet;
            })
		default:
			return tweets;
    }
}

function users(users = [], action){
    switch(action.type){
		case AUTH_USER:
			return [
				...users, {
					login: action.login,
					isCurrent: action.isCurrent
                }
			]
		default:
			return users;
    }
}
const tweetApp = combineReducers({ users, tweets });

export default tweetApp;
