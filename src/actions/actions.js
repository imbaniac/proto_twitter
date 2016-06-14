export const ADD_TWEET = 'ADD_TWEET';
export const COMMENT_TWEET = "COMMENT_TWEET";
export const AUTH_USER = "AUTH_USER";

let nextTweet = 0;

export function addTweet(tweet, owner){
    return {
        type: ADD_TWEET,
        id: nextTweet++,
        tweet,
		owner,
        comments: [],
        createdAt: new Date().toUTCString()
    }
}

export function commentTweet(comment, index) {
    return {
        type: COMMENT_TWEET,
        index,
        comment
    }
}

export function authUser(login){
	return {
		type: AUTH_USER,
		login
	}
}
