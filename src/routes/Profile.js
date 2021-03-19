import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "styles/profile.css";

const Profile = ({ ImageInput, userObj, setUserObj, refreshUser }) => {
  const history = useHistory();
  const [newUserObj, setNewUserObj] = useState({
    displayName: userObj.displayName,
    photoURL: userObj.photoURL,
  });

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyNweets = async () => {
    await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
  };
  useEffect(() => {
    getMyNweets();
  }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewUserObj((data) => ({ ...data, displayName: value }));
    // setUserObj((data) => ({ ...data, displayName: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (
      userObj.displayName !== newUserObj.displayName ||
      userObj.photoURL !== newUserObj.photoURL
    ) {
      await userObj.updateProfile({
        displayName: newUserObj.displayName,
        photoURL: newUserObj.photoURL,
      });
    }
    refreshUser();
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <p className="profile_photo">
          <img
            src={newUserObj.photoURL}
            alt={`${userObj.displayName}'s profile`}
          />
        </p>
        <ImageInput setNewUserObj={setNewUserObj} />
        <input
          className="formInput"
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newUserObj.displayName}
          autoFocus
        />
        <input type="submit" value="Update Profile" className="formBtn" />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};

export default Profile;
