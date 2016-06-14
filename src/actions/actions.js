export const ADD_TWEET = 'ADD_TWEET';
export const COMMENT_TWEET = "COMMENT_TWEET";
export const AUTH_USER = "AUTH_USER";
import uuid from 'uuid';


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

export function commentTweet(comment, index, author) {
    return {
        type: COMMENT_TWEET,
        index,
        comment,
		author
    }
}

export function authUser(login){
	return {
		type: AUTH_USER,
		login
	}
}
