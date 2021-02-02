import { dbService } from "fbase";
import React, { useState } from "react";

<<<<<<< HEAD
const Nweet = ({ isOwner, nweetObj }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDelete = async () => {
    const OK = window.confirm("Are you sure you want to delete this nweet?");
    if (OK) {
=======
const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      //delete nweet
>>>>>>> 61f126c8b5b5369288bdf982064e6efdc4e8de1e
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);
<<<<<<< HEAD

=======
  const onSubmit = async (event) => {
    console.log(11);
    event.preventDefault();
    console.log(nweetObj, newNweet);
    await dbService.doc(`nweets/${nweetObj.id}`).update({ text: newNweet });
    setEditing(false);
  };
>>>>>>> 61f126c8b5b5369288bdf982064e6efdc4e8de1e
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
<<<<<<< HEAD

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };

=======
>>>>>>> 61f126c8b5b5369288bdf982064e6efdc4e8de1e
  return (
    <div>
      {editing ? (
        <>
<<<<<<< HEAD
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  onChange={onChange}
                  type="text"
                  value={newNweet}
                  placeholder="Edit Nweet"
                  required
                />
                <input type="submit" value="Update" />
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          )}
=======
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
>>>>>>> 61f126c8b5b5369288bdf982064e6efdc4e8de1e
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
<<<<<<< HEAD
              <button onClick={onDelete}>Delete</button>
=======
              <button onClick={onDeleteClick}>Delete</button>
>>>>>>> 61f126c8b5b5369288bdf982064e6efdc4e8de1e
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
