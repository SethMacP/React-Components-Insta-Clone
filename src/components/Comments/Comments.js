import React, {useState} from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  
//working [yes]
  return (
    <div>
      {comments.map((comment) =>(
        <Comment
        key = {comment.id}
        comment={comment}
        />
      ))}
    </div>
  );
};

export default Comments;


/* map through the comments prop and render a Comment for every piece of data */