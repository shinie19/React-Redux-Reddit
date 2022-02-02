import React from "react";
import "./footer.css";

function Footer(props) {
  const { isOpenPost, setOpenPost } = props;

  return (
    <footer>
      <div onClick={() => setOpenPost(!isOpenPost)} className="footer-title">
        {isOpenPost ? "×" : "+"}
      </div>
    </footer>
  );
}

export default Footer;
