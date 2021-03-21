import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import "styles/mweet.css";
import User from "./User";

const Mweet = ({ mweetObj, userObj, isOwner, darkMode }) => {
  const [editing, setEditing] = useState(false);
  const [newMweet, setNewMweet] = useState(mweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this mweet?");
    if (ok) {
      //delete mweet
      await dbService.doc(`mweets/${mweetObj.id}`).delete();
      await storageService.refFromURL(mweetObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`mweets/${mweetObj.id}`).update({ text: newMweet });
    setEditing(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewMweet(value);
  };

  const handleLike = () => {
    if (!mweetObj.liked_users.includes(userObj.uid)) {
      // like 버튼을 누르지 않았을 때
      dbService.doc(`mweets/${mweetObj.id}`).update({
        like: (mweetObj.like += 1),
        liked_users: [...mweetObj.liked_users, userObj.uid],
      });
    }
  };

  return (
    <li className={darkMode ? "mweet dark" : "mweet"}>
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container mweetEdit">
            <input
              className="formInput"
              onChange={onChange}
              type="text"
              placeholder="Edit your mweet"
              value={newMweet}
              autoFocus
              required
            />
            <p className="formBtn_icon">
              <input
                className=" formBtn_text formBtn_text_update"
                type="submit"
                value="Update Mweet"
              />
              <span className="editing_icon update">
                <i className="fas fa-pen"></i>
              </span>
            </p>
          </form>
          <p className=" cancelBtn formBtn_icon" onClick={toggleEditing}>
            <span className="formBtn_text formBtn_text_cancel">Cancel</span>
            <span className="editing_icon cancel">
              <i className="fas fa-window-close"></i>
            </span>
          </p>
        </>
      ) : (
        <>
          <Link
            to={{
              pathname: "/account",
              state: {
                userId: mweetObj.creatorId,
                userName: mweetObj.username,
                userPhoto: mweetObj.photoURL,
              },
            }}
          >
            <User mweetObj={mweetObj} />
          </Link>
          <p className="date">
            {new Date(mweetObj.createdAt).toLocaleDateString()}
          </p>
          <h4 className="mweet_content">{mweetObj.text}</h4>
          {mweetObj.attachmentUrl && (
            <img src={mweetObj.attachmentUrl} alt="mweet" />
          )}
          <div className="like_and_comment">
            <p className="like" onClick={handleLike}>
              <i className="fas fa-heart"></i>
              <span className="like_number">{mweetObj.like}</span>
            </p>
            <Comments mweetObj={mweetObj} userObj={userObj} />
          </div>
          {isOwner && (
            <div className="mweet_actions">
              <span className="actions_icon delete" onClick={onDeleteClick}>
                <i className="far fa-trash-alt delete_icon"></i>
                delete
              </span>
              <span className="actions_icon edit" onClick={toggleEditing}>
                <i className="far fa-edit edit_icon"></i>
                edit
              </span>
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default Mweet;
