import React, { useRef, useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import "styles/nweetFactory.css";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const fileRef = useRef();

  const onSubmit = async (event) => {
    if (nweet === "") {
      return;
    }
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const nweetObj = {
      username: userObj.displayName,
      photoURL: userObj.photoURL,
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl, //attachment가 없을 땐 빈 문자열을 가짐!
      like: 0,
      liked_users: [],
      comments:[]
    };
    await dbService.collection("nweets").add(nweetObj);
    setNweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNweet(value);
  };

  const onFileChange = (event) => {
    const theFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onAttachmentClick = () => {
    setAttachment("");
    fileRef.current.value = "";
  };
  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput_container">
        <input
          className="factoryInput__input"
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <label htmlFor="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <i className="fas fa-plus"></i>
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileRef}
        style={{ opacity: 0 }}
      />

      {attachment && (
        <div className="factoryForm__attachment">
          <img
            src={attachment}
            alt="attachment"
            style={{
              backgroundImage: attachment,
            }}
          />
          <div className="factoryForm__clear" onClick={onAttachmentClick}>
            <span>Remove</span>
            <i className="fas fa-times"></i>
          </div>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
