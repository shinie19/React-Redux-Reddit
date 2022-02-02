import React from "react";
import "./header.css";

Header.propTypes = {};

function Header(props) {
  const { setEdit } = props;

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#e69138",
          backgroundImage:
            "linear-gradient(180deg, #e69138 2%, #e69138, 65%, #181818 100%)",
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEditClick}>
            Edit
          </div>
          <img
            className="info-ava"
            src="https://i.redd.it/mozfkrjpoa261.png"
            alt=""
          />
          <div className="info-username">Shinie Nguyen</div>
          <div className="info-age">20 years old</div>
          <div className="info-about">I'm a software developer</div>
        </div>
      </header>
    </>
  );
}

export default Header;
