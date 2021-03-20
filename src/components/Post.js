import React from "react";
import "styles/post.css";
const Post = ({ post_item }) => {
  console.log(post_item);
  return (
    <li className="post">
      <p className="date">
        {new Date(post_item.createdAt).toLocaleDateString()}
      </p>
      <h4>{post_item.text}</h4>
      {post_item.attachmentUrl && (
        <img className="post_img" src={post_item.attachmentUrl} alt="nweet" />
      )}
      <div className="like_and_comment">
        <p className="like">
          <i className="fas fa-heart"></i>
          <span className="like_number">{post_item.like}</span>
        </p>
      </div>
    </li>
  );
};

export default Post;
