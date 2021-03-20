import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import Account from "routes/Account";
import "styles/router.css";
import ToggleBtn from "./ToggleBtn";

const AppRouter = ({
  ImageInput,
  isLoggedIn,
  userObj,
  setUserObj,
  refreshUser,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <ToggleBtn darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Switch>
        <>
          {isLoggedIn ? (
            <div className="router_loggedIn">
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route exact path="/profile">
                <Profile
                  ImageInput={ImageInput}
                  userObj={userObj}
                  setUserObj={setUserObj}
                  refreshUser={refreshUser}
                />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
            </div>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
              {/* <Redirect from='*' to='/' />  */}
            </>
          )}
        </>
      </Switch>
    </Router>
  );
};

export default AppRouter;
