import Navbar from "../../layout/navbar";
import MotoLogo from "../../layout/logo";
import CollectionStatus from "../../layout/collectionstatus"
// import NftIntroduce from "../layout/intro";
import Channels from "../../layout/channel";
// import Mans from "../layout/mans";
import Button_nft_number from "../../layout/nftmintbutton";
import NftSummary from "../../layout/nftsummary";
import MintingPage from "../../layout/mintpage"

// import IntroNftCollection from "../layout/nftcollection";
// import NFTtokenmethod from "../layout/nfttokenmethod";
// import ActionGirl from "../layout/actiongirl";
// import RoadMap from "../layout/roadmap";
// import WhiteList from "../layout/whiteList";
// import Footer from "../layout/footer";
// import ShowButton from "../layout/shop_now";
const Store = () => {
    return(
        <div>
            <Navbar />
            <MotoLogo />
            <CollectionStatus />
            <Button_nft_number />
            <NftSummary />
            <Channels style={{marginTop: "25px"}}/>
            <MintingPage />
        </div>
    )
}
export default Store;