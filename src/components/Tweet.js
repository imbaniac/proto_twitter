import React from 'react';
import Comments from './Comments';

const Tweet = ({tw, onCommentSubmit}) => {
    let input
    return(
        <div>
			<span className="tweetText">{tw.tweet}</span>
			<div className="date">Tweeted at: {tw.createdAt}</div>
            <form className="commentsForm" onSubmit={ (e) =>{
                e.preventDefault()
                if (!input.value.trim()) return
                onCommentSubmit(input.value, tw.id)
                input.value = ''
            }}>
	            <textarea ref= {node => { input = node }}
	            placeholder="Got anything to say? ^_|_^ "></textarea>
	            <button>Comment</button>
            </form>
            <Comments comments = {tw.comments}/>
        </div>
    )
};

export default Tweet;
