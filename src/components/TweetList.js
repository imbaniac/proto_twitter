import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets, onCommentSubmit }) => {
    return(
    <ul className="tweetList">
	{console.log(tweets)}
			tweets.map((tw) => {
				<li className="tweet" key={tw.id}>
					<Tweet tw={tw} onCommentSubmit={onCommentSubmit} />
				</li>
			})
		)}
    </ul>
	);
}

export default TweetList;
