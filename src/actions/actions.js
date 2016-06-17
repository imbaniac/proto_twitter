export const ADD_TWEET = 'ADD_TWEET';
export const COMMENT_TWEET = "COMMENT_TWEET";
export const AUTH_USER = "AUTH_USER";

import {v4} from 'node-uuid';

export const addTweet = (tweet, owner) => ({
	type: ADD_TWEET,
	id: v4(),
	tweet,
	owner,
	comments: [],
	createdAt: new Date().toLocaleString()
});

export const commentTweet = (comment, index) => ({
	type: COMMENT_TWEET,
	index,
	comment
});

export const authUser = (login, isCurrent=true) => ({
	type: AUTH_USER,
	login,
	isCurrent
})
