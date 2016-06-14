import React from 'react';
import Comments from './Comments';

const Tweet = ({tw, onCommentSubmit}) => {
    let input;
	let currentUser = tw.owner;
    return(
        <div>
			<span>{tw.owner}</span>
			<p className="tweetText">{tw.tweet}</p>
			<div className="date">Tweeted at: {tw.createdAt}</div>
            <form className="commentsForm" onSubmit={ (e) =>{
                e.preventDefault()
                if (!input.value.trim()) return
                onCommentSubmit(input.value, tw.id, currentUser)
                input.value = ''
            }}>
	            <textarea ref= {node => { input = node }}
	            placeholder="Got anything to say? ^_|_^ "></textarea>
	            <button>Comment</button>
            </form>
            <Comments comments = {tw.comments} author = {currentUser}/>
        </div>
    )
};

export default Tweet;
