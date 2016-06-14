import React from 'react';
import Comments from './Comments';

const Tweet = ({tw, onCommentSubmit}) => {
    let input;
	let currentUser = tw.owner;

    return(
        <div>
			<em>{tw.owner}</em>
			<p className="tweetText">{tw.tweet}</p>
			<time className="date">Tweeted at: {tw.createdAt}</time>

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
