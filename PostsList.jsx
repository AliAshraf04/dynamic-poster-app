import React from 'react';
import Post from "./post";
import classes from "./PostsLists.module.css";
import { useLoaderData } from 'react-router-dom';


function PostsList() {
  const posts = useLoaderData();
  return (
      <div>
        { posts.length > 0 && (
          <ul className={classes.posts}>
            {posts.map((post) => (
              <Post key={post.id}  id= {post.id} author={post.author} body={post.body} />
            ))}
          </ul>
        )}
        {posts.length ===0 && (
          <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts found</h2>
          <p> Start adding some</p>
        </div>
  )}
      </div>
    );
  }
export default PostsList;
