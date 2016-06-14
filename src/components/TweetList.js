import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets, onCommentSubmit, currentUser }) => {
    return(
    <ul className="tweetList">
			{tweets.map(tw =>
				<li className="tweet" key={tw.id}>
					<Tweet currentUser={currentUser.login} tw={tw} onCommentSubmit={onCommentSubmit} />
				</li>
			)}
    </ul>
	);
};

export default TweetList;
