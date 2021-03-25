import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App({ ImageInput }) {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
          photoURL: user.photoURL,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <div className={init ? "" : 'loading_body'}>
      {init ? (
        <AppRouter
          ImageInput={ImageInput}
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          setUserObj={setUserObj}
        />
      ) : (
        <div className="loading">
          <p className="loading_border"></p>
          <p className="loading_circle"></p>
          <p className="loading_text">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
