import { BsDiscord } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import "./style.css"
const channel = () => {
    return (
        <div className="center_channel">
            <BsDiscord style={{color: "white", fontSize: "3vw"}}/>
            <FaTwitterSquare style={{color: "white", fontSize: "3vw", marginLeft: "30px"}}/>
        </div>
    )
}
export default channel;