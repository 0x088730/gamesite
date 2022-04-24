import "./style.css";
const nftmintbutton = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <button className="supply">
        <p className="subject_title">Listed</p>
        <p className="subject_value">21,000</p>
      </button>
      <button className="supply">
        <p className="subject_title">Available</p>
        <p className="subject_value">1,001</p>
      </button>
      <button className="supply">
        <p className="subject_title">Sold Out</p>
        <p className="subject_value">19,999</p>
      </button>
    </div>
  );
};
export default nftmintbutton;
