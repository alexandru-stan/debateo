import React from 'react';

export const Comment = (props)=> {

return (
    <div className='comment'>
      <h2>{props.username}</h2>
        <span className='comment-text'>{props.commentText}</span>
    </div>
);

}
