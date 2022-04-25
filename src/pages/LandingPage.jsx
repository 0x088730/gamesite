import React, { useEffect } from "react";
import { connect } from "react-redux";
import { UserService } from "../UserService";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import Navbar from "../layout/navbar";
import Earth from "../layout/earth";
import Compass from "../layout/compass";
import EarthBottom from "../layout/earthbottom";
import GameCategory from "../layout/gamecategory";
import GameImage from "../layout/gameImage";
import Footer from "../layout/footer"
// import homeScreen from "../images/image-4@2x.png";
// import MotoLogo from "../layout/logo";
// import NftIntroduce from "../layout/intro";
// import Channels from "../layout/channel";
// import Mans from "../layout/mans";
// import Button_group from "../layout/mintbutton";
// import IntroNftCollection from "../layout/nftcollection";
// import NFTtokenmethod from "../layout/nfttokenmethod";
// import ActionGirl from "../layout/actiongirl";
// import RoadMap from "../layout/roadmap";
// import WhiteList from "../layout/whiteList";
// import Footer from "../layout/footer";
// import ShowButton from "../layout/shop_now";
const LandingPage = (props) => {
  //----- Custom Functions -----
  const login = () => {
    UserService.login();
  };

  //----- Lifecycle Events -----
  useEffect(() => {
    if (props.isLogged) navigate("/landing-page");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLogged]);

  //----- Others ------
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.divHomeScreen} style={{background: "#13142c", height: "auto"}}>
      <Navbar />
      <Compass />
      <Earth />
      <EarthBottom />
      <GameCategory />
      <GameImage />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

const useStyles = makeStyles((theme) => ({
  divHomeScreen: {
    "@media(min-width: 668px)": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "895px",
      // backgroundImage: `url(${homeScreen})!important`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat!important",
      // backgroundAttachment: "fixed",
      backgroundSize: "auto 100%",
    },
    "@media(max-width: 667px)": {},
  },
  signInButton: {
    "@media(min-width: 668px)": {
      width: "46vh",
      height: "10vh",
      position: "fixed",
      left: "calc(50vw - 23vh)",
      bottom: "11vh",
      cursor: "pointer",
    },
  },
}));
