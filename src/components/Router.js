import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import "styles/router.css";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        <>
          {isLoggedIn ? (
            <div className="router_loggedIn">
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route exact path="/profile">
                <Profile userObj={userObj} refreshUser={refreshUser} />
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
