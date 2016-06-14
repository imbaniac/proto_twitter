import React from 'react';

const Comments = ({comments, author}) => {
    return (
    <ul className="commentsList">
    <h3 className="commentsTitle">{comments.length} comments:</h3>
        {comments.map((comment, i)=>
            <li key={i}>
				<p>{ comment }</p>
				<em>{ author }</em>
            </li>

        )}
    </ul>

    )
}

export default Comments;
