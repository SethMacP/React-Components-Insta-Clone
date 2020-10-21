import React, {useState} from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log("comments",props);

  return (
    <div>
      {props.comments.map((comment) =>(
        <Comment
        key = {comments.id}
        username = {comments.username}
        text = {comments.text}
        ></Comment>
      ))}
    </div>
  );
};

export default Comments;


/* map through the comments prop and render a Comment for every piece of data */