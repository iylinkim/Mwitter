import "styles/comment.css";
const Comment = ({ each_comment, userObj }) => {
  return (
    <li className="each_comment">
      <p className="comment_username">{userObj.displayName}</p>
      {each_comment}
    </li>
  );
};

export default Comment;
