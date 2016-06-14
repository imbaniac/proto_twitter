import React from 'react';

const Comments = ({comments}) => {
    return (
    <ul className="commentsList">
    <h3 className="commentsTitle">{comments.length} comments:</h3>
        {comments.map((comment, i)=>
            <li key={i}>
                { comment }
            </li>

        )}
    </ul>

    )
}

export default Comments;
