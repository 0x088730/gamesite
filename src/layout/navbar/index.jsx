import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsMinecartLoaded, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import "./style.css";
const Navbar = () => {
  const [useoption, usersetoption] = useState(false);
  const wallet = () => {
    usersetoption(true);
  };
  const storeNft = () => {};
  return (
    <div>
      {/* <div className="navbar_header">
        <div className="left_header">
          <span><Link to="store" id="estimate_underline">Store</Link></span>
          <span>Merchandise</span>
          <span>About</span>
          <span>Roadmap</span>
          <span>FAQ</span>
        </div>
        <div className="right_header">
          <span>USD</span>
          <span><BsMinecartLoaded /></span>
          {
            useoption === false ? <span className="button_login" onClick={() => wallet()}>Login</span> : <span className="button_login" onClick={() => wallet()}><img src="./coin/image-429@2x.png" alt="" id="coin" />Ki.fg.warm</span>
          }
        </div>
        
      </div> */}
      <div className="flex-navbar">
        <div className="logo">
          <img src="./Image 1/Image@1.png" alt="" id="image-logo" />
        </div>
        <div className="ul-bar">
          <span className="navbar-setting">Watch</span>
          <span className="navbar-setting">Game</span>
          <span className="navbar-setting">Learn</span>
          <span className="navbar-setting">Media Center</span>
        </div>
        <div className="btn-nav">
          <span id="donate-btn">Donate</span>
        </div>
        <div className="sociallink">
          <div className="auth">
            <p style={{ color: "white" }}>اللغة العربية&nbsp;&nbsp;&nbsp;</p>
            <p
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#006F2E",
              }}
            ></p>
          </div>
          <div id="icon-pos">

          </div>
          <div id="icon-pos">
            <FaFacebookF style={{ color: "white" }}/>
          </div>
          <div id="icon-pos">
            <FaLinkedinIn style={{ color: "white" }}/>
          </div>
          <div id="icon-pos">
            <BsTwitter style={{ color: "white" }}/>
          </div>
          <div id="icon-pos">
            <BsYoutube style={{ color: "white" }}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
