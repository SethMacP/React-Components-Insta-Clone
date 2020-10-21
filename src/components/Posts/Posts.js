import React, {useState} from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!

  // ? Why are we passing props and then destructuring it? What are we accomplishing because those variables are undefined.
  
  // const { likePost, posts } = props;
 const [ posts, setPosts ]= useState(props.placeholder);
// console.log('var1', props);
// console.log('var2', likePost);
// console.log('var3', posts);
  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => (
        <Post 
        comments     = { post.comments }
        key          = { post.id }
        imageUrl     = { post.imageUrl }
        likes        = { post.likes }
        thumbnailUrl = { post.thumbnailUrl }
        timestamp    = { post.timestamp }
        username     = { post.username }
        ></Post>
      ))}
      
    </div>
  );
};

export default Posts;




