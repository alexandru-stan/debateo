import React from 'react';

export const Comment = (props)=> {

return (
    <div class='comment'>
      <h2>{props.username}</h2>
        <span class='comment-text'>{props.commentText}</span>
    </div>
);

}
