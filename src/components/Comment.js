import "styles/comment.css";
const Comment = ({ each_comment }) => {
  return (
    <li className="each_comment">
      <p className="comment_username">{each_comment.displayName}</p>
      {each_comment.comment}
    </li>
  );
};

export default Comment;
