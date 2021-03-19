import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import "styles/nweet.css";

const Nweet = ({ nweetObj, userObj, isOwner }) => {
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
      // like 버튼을 누르지 않았음
      dbService.doc(`nweets/${nweetObj.id}`).update({
        like: nweetObj.like+=1,
        liked_users: [...nweetObj.liked_users, userObj.uid],
      });
    }
  };
  return (
    <li className="nweet">
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
            <input className="formBtn" type="submit" value="Update Nweet" />
          </form>
          <span className="formBtn cancelBtn" onClick={toggleEditing}>
            Cancel
          </span>
        </>
      ) : (
        <>
          <div className="user">
            <p className="user_photo">
              <img src={nweetObj.photoURL} alt={nweetObj.username} />
            </p>
            <p className="user_name">{nweetObj.username}</p>
          </div>
          <p className="date">
            {new Date(nweetObj.createdAt).toLocaleDateString()}
          </p>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img src={nweetObj.attachmentUrl} alt="nweet" />
          )}
          <p className="like" onClick={handleLike}>
            <i className="far fa-heart"></i>
            {nweetObj.like}
          </p>
          {isOwner && (
            <div className="nweet_actions">
              <span onClick={onDeleteClick}>
                <i className="far fa-trash-alt"></i>
                delete
              </span>
              <span onClick={toggleEditing}>
                <i className="far fa-edit"></i>
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
