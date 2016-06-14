import React from 'react';
import Comments from './Comments';

const Tweet = ({tw, onCommentSubmit, currentUser}) => {
    let input;
    return(
        <div>
			<em>By: {currentUser}</em>
			<p className="tweetText">{tw.tweet}</p>
			<span className="date">Tweeted at: <time>{tw.createdAt}</time></span>

			<form className="commentsForm" onSubmit={ (e) =>{
                e.preventDefault()
                if (!input.value.trim()) return
                onCommentSubmit(input.value, tw.id)
                input.value = ''
			}}>
	            <textarea ref={node => { input = node }}
	            placeholder="Got anything to say? ^_|_^ "></textarea>
	            <button>Comment</button>
            </form>

            <Comments comments = {tw.comments} author = {currentUser}/>
        </div>
    )
};

export default Tweet;
