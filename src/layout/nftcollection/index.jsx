import "./style.css";
import { BsYoutube } from "react-icons/bs";
const nftcollection = () => {
  return (
    <>
      <div className="nft_center">
        Collect 30 packaged action figure NFTs and get<br></br> your own
        packaged action figure NFT
      </div>
      <div className="flexbar">
        <div className="youtube_video">
          <div className="youtube_icon">
            <BsYoutube style={{ fontSize: "100px", color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};
export default nftcollection;
