// You do not need to change any code in this file
import React from 'react';

const PostHeader = props => {
  // 🔥 Make sure the parent of PostHeader is passing the right props!
  //const { thumbnailUrl, username } = props;
// console.log (props.thumbnailUrl);
// console.log(props.username)

  return (
    <div className='post-header'>
      <div className='post-thumb-wrapper'>
        <img
          alt='post header'
          className='post-thumb'
          src={props.thumbnailUrl}
        />
      </div>
      <h2>{props.username}</h2>
    </div>
  );
};

export default PostHeader;
