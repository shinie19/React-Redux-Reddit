import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

Header.propTypes = {};

function Header(props) {
  const { setEdit } = props;
  const user = useSelector((state) => state.user);

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage: `linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor}, 65%, #181818 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEditClick}>
            Edit
          </div>
          <img className="info-ava" src={user.avatarUrl} alt="" />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age} years old</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </>
  );
}

export default Header;
