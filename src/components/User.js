import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import 'styles/user.css';

const User = ({ nweetObj }) => {
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
  }, []);

  return (
    <div className={`nweet_user ${directory}`}>
      <p className="user_photo">
        <img
          src={nweetObj ? nweetObj.photoURL : account.userPhoto}
          alt={nweetObj ? nweetObj.username : account.userName}
        />
      </p>
      <p className="user_name">
        {nweetObj ? nweetObj.username : account.userName}
      </p>
    </div>
  );
};

export default User;
