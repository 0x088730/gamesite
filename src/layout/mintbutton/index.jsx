import "./style.css";
const mintbutton = () => {
    return(
        <div style={{textAlign: "center"}}>
            <button className="supply"><p className="subject_title">Total Supply</p><p className="subject_value">21,000</p></button>
            <button className="supply"><p className="subject_title">Drop Date</p><p className="subject_value">May / Jun</p></button>
            <button className="supply"><p className="subject_title">Mint Price</p><p className="subject_value">100 WAX</p></button>
        </div>
    )
};
export default mintbutton;