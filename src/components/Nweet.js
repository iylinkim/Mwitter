import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import "styles/nweet.css";
import User from "./User";

const Nweet = ({ nweetObj, userObj, isOwner, darkMode }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      //delete nweet
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      await storageService.refFromURL(nweetObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({ text: newNweet });
    setEditing(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  const handleLike = () => {
    if (!nweetObj.liked_users.includes(userObj.uid)) {
      // like 버튼을 누르지 않았을 때
      dbService.doc(`nweets/${nweetObj.id}`).update({
        like: (nweetObj.like += 1),
        liked_users: [...nweetObj.liked_users, userObj.uid],
      });
    }
  };

  return (
    <li className={darkMode ? "nweet dark" : "nweet"}>
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              className="formInput"
              onChange={onChange}
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              autoFocus
              required
            />
            <p className="formBtn_icon">
              <input
                className=" formBtn_text formBtn_text_update"
                type="submit"
                value="Update Nweet"
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
                userId: nweetObj.creatorId,
                userName: nweetObj.username,
                userPhoto: nweetObj.photoURL,
              },
            }}
          >
            <User nweetObj={nweetObj} />
          </Link>
          <p className="date">
            {new Date(nweetObj.createdAt).toLocaleDateString()}
          </p>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img src={nweetObj.attachmentUrl} alt="nweet" />
          )}
          <div className="like_and_comment">
            <p className="like" onClick={handleLike}>
              <i className="fas fa-heart"></i>
              <span className="like_number">{nweetObj.like}</span>
            </p>
            <Comments nweetObj={nweetObj} userObj={userObj} />
          </div>
          {isOwner && (
            <div className="nweet_actions">
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

export default Nweet;
