import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
<<<<<<< HEAD
      user ? setUserObj(user) : setUserObj(null);
=======
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
>>>>>>> 61f126c8b5b5369288bdf982064e6efdc4e8de1e
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
<<<<<<< HEAD
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
=======
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
>>>>>>> 61f126c8b5b5369288bdf982064e6efdc4e8de1e
      ) : (
        "Initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
