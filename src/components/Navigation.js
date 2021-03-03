import React from "react";
import { Link } from "react-router-dom";
import "styles/navigation.css";

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <ul className="navigation">
        <li className="home">
          <Link to="/">
            <i className="fab fa-twitter twitter"></i>
          </Link>
        </li>
        <li className="profile">
          <Link to="/profile">
            <i className="fas fa-user user"></i>
            <span className="profileText">
              {userObj.displayName
                ? `${userObj.displayName}의 Profile`
                : "Profile"}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
