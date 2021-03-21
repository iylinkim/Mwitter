import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "styles/user.css";

const User = ({ mweetObj }) => {
  const history = useHistory();
  const [account, setAccount] = useState({});
  const [directory, setDirectory] = useState("");

  useEffect(() => {
    if (history.location.state) {
      setAccount(history.location.state);
    }

    if (history.location.pathname === "/account") {
      setDirectory(() => "account");
    }
  }, [history.location.state]);

  return (
    <div className={`mweet_user ${directory}`}>
      <p className="user_photo">
        <img
          src={mweetObj ? mweetObj.photoURL : account.userPhoto}
          alt={mweetObj ? mweetObj.username : account.userName}
        />
      </p>
      <p className="user_name">
        {mweetObj ? mweetObj.username : account.userName}
      </p>
    </div>
  );
};

export default User;
