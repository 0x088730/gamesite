import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@mui/styles";
import Footer from "../../layout/footer";
import "./style.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
let arraytoken = [
  {
    nft_name: "Kenn Bosak",
    "nft-price": 500,
    "image-path": "./masternft/image-31@2x.png",
  },
  {
    "nft-name": "Kenn Bosak",
    "nft-price": 500,
    "image-path": "./masternft/image-31@2x.png",
  },
  {
    "nft-name": "Kenn Bosak",
    "nft-price": 500,
    "image-path": "./masternft/image-31@2x.png",
  },
  {
    "nft-name": "Kenn Bosak",
    "nft-price": 500,
    "image-path": "./masternft/image-31@2x.png",
  },
];
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Mintpage = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const useStyles = makeStyles({
    customOutline: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    },
  });
  const classes = useStyles();
  const allnft = (datakey) => {
    if(datakey === "0") {
      setStyle("checkbox-nft-style1");
      setAvailable("checkbox-available-style")
      setSolid("checkbox-solid-style")
    }
    else if(datakey === "1") {
      setStyle("checkbox-nft-style");
      setSolid("checkbox-solid-style")
      setAvailable("checkbox-available-style1")
    }
    else if(datakey === "2") {
      setStyle("checkbox-nft-style");
      setAvailable("checkbox-available-style")
      setSolid("checkbox-solid-style1")
    }
  }
  const [style_all_nft, setStyle] = useState("checkbox-nft-style");
  const [style_available, setAvailable] = useState("checkbox-available-style");
  const [style_Solid, setSolid] = useState("checkbox-solid-style");

  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("cont2");
  };
  return (
    <div>
      {console.log(arraytoken)}
      <div className="mint_flex">
        <div className="filter">
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple" style={{ color: "white" }}>
              Apply filter
            </InputLabel>
            <Input
              id="component-simple"
              value={name}
              onChange={handleChange}
              style={{ color: "white", borderBottom: "0.5px solid" }}
            />
          </FormControl>
          <br />
          <br />
          <h3 className="label_style">Collection</h3>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleSelectChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              sx={{
                color: "white",
              }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />
          <h3 className="label_style">Status</h3>
          <div>
            <div className="checkbox-flex" onClick={() => allnft("0")}>
              <div className={style_all_nft}></div>&nbsp;&nbsp;&nbsp;
              <span className="checkbox-label">All NFT</span>
            </div>
            <div className="checkbox-flex" onClick={() => allnft("1")}>
              <div className={style_available}></div>&nbsp;&nbsp;&nbsp;
              <span className="checkbox-label">Available</span>
            </div>
            <div className="checkbox-flex" onClick={() => allnft("2")}>
              <div className={style_Solid}></div>&nbsp;&nbsp;&nbsp;
              <span className="checkbox-label">Solid Out</span>
            </div>
          </div>
          <br />
          <h3 className="label_style">Price</h3>
          <div className="PriceSwitch">
            <div className="wax">WAX</div>
            <div className="usd">USD</div>
          </div>
          <div className="max-min-price">
            <div className="min">Min</div>
            <div className="connect-to">to</div>
            <div className="max">Max</div>
          </div>
        </div>
        <div className="filter-content">
          <div className="filter-searchbar">
            <div className="searchbar">
              <input
                type="text"
                name=""
                id="searchbar"
                placeholder="Search Collection"
              />
            </div>
            <div className="mint_number">
              <span>Number in Mint:&nbsp;&nbsp;</span>
            </div>
            <div className="filter_search">
              <select name="" id="filter_search" value={1}>
                <option value="1">Low to high</option>
                <option value="2">High to low</option>
              </select>
            </div>
          </div>
          <br />
          <div className="nfttokenspace">
            <div className="NFTtoken">
              {arraytoken.map((item, i) => (
                <div className="nft1">
                  <div className="nft-first-card">
                    <img
                      src="./masternft/image-31@2x.png"
                      alt=""
                      id="nftcart"
                    />
                    <div className="nft-info" id="first-info">
                      <div className="nft-name">{item.nft_name}</div>
                      <div className="nft-price">Price</div>
                    </div>
                    <div className="nft-info">
                      <div className="nft-name">#1</div>
                      <div className="nft-price">
                        <img
                          src="./coin/image-429@2x.png"
                          style={{ width: "15px", height: "auto" }}
                        />
                        &nbsp;500
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div className="NFTtoken">
              {arraytoken.map((item, i) => (
                <div className="nft1">
                  <div className="nft-first-card">
                    <img
                      src="./masternft/image-31@2x.png"
                      alt=""
                      id="nftcart"
                    />
                    <div className="nft-info" id="first-info">
                      <div className="nft-name">{item.nft_name}</div>
                      <div className="nft-price">Price</div>
                    </div>
                    <div className="nft-info">
                      <div className="nft-name">#1</div>
                      <div className="nft-price">
                        <img
                          src="./coin/image-429@2x.png"
                          style={{ width: "15px", height: "auto" }}
                        />
                        &nbsp;500
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div className="NFTtoken">
              {arraytoken.map((item, i) => (
                <div className="nft1">
                  <div className="nft-first-card">
                    <img
                      src="./masternft/image-31@2x.png"
                      alt=""
                      id="nftcart"
                    />
                    <div className="nft-info" id="first-info">
                      <div className="nft-name">{item.nft_name}</div>
                      <div className="nft-price">Price</div>
                    </div>
                    <div className="nft-info">
                      <div className="nft-name">#1</div>
                      <div className="nft-price">
                        <img
                          src="./coin/image-429@2x.png"
                          style={{ width: "15px", height: "auto" }}
                        />
                        &nbsp;500
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="nft2">dsfffffffsdfsdfsdf</div>
            <div className="nft3">dsfffffffsdfsdfsdf</div>
            <div className="nft4">dsfffffffsdfsdfsdf</div> */}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};
export default Mintpage;
