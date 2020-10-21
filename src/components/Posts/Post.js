import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  
  // const { post, likePost } = props;
  const [post , setPost] = useState(props);
  console.log('Post.js - Props', props);

  

  // console.log('post image',props.imageUrl)

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      
      <LikeSection 
      numberOfLikes = {props.likes}
      likePost = {props.likePost}
      postId = {props.postId}
      // postId = {props.key}
      />
      
      <Comments 
      comments = {post.comments}/>
    </div>
  );
};

export default Post;
