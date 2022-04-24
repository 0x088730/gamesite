import "./style.css";
// import Channels from "../channel";
const footer = () => {
  return (
    <>
      <div>
        <div className="action-gamer">
          <div className="channels">
            {/* <div><img src="./footer/Group 21082.png" alt="" className="gamecrossimage"/></div>
              <div><img src="./footer/Group 21082.png" alt="" className="gamecrossimage"/></div>
              <div><img src="./footer/Group 21082.png" alt="" className="gamecrossimage"/></div>
            <div><img src="./footer/Group 21082.png" alt="" className="gamecrossimage"/></div> */}
          </div>
          <div className="gamecross"></div>
        </div>
        {/* <div><img src="./footer/Group 20918.svg" alt=""/></div> */}
        <div className="stay_connected">Stay Connected</div>
        <div className="footerchannel">
          <img src="./footer/Group 20918.svg" alt="" className="channelsvg" />
          <img src="./footer/Group 20919.png" alt="" className="channelsvg" />
          <img src="./footer/Group 20921.svg" alt="" className="channelsvg" />
          <img src="./footer/Group 20922.svg" alt="" className="channelsvg" />
          <img src="./footer/Group 20923.svg" alt="" className="channelsvg" />
        </div>

        <img src="./footer/Group 21082.png" alt="" className="gamecrossimage" />
      </div>
      <div className="GWB">
      © 2021 GWB. All rights reserved
      </div>
    </>
  );
};
export default footer;
