import "./style.css";
import InputLabel from "@mui/material/InputLabel";
import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
const gameconsoles = [
  "boardcross",
  "pc",
  "mobile"
];
const plateforms = [
  "PC/MAC",
  "Playstation",
  "VR Headsets",
  "Mobile tablets"
];
const genre = [
  "Kill",
  "funny",
  "interest",
];
const regions = [
  "USA",
  "KSA",
  "AUS",
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "10vw",
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
const Gamecategory = () => {
  const [personName, setPersonName] = useState([]);
  const theme = useTheme();
  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSelectChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSelectChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSelectChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <div className="flex-pickgame">
        <div className="pickgame"><p className="pick-font">PICK A GAME & PLAY</p><p className="choose-font">Choose between 1349 game & enjoy your time.</p></div>
        <div className="filter-menu">
          <div className="filter1">
            <FormControl sx={{ m: 1, width: "10vw" }}>
              <InputLabel id="demo-multiple-name-label">All Genre</InputLabel>
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
                {gameconsoles.map((name) => (
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
          </div>

          <div className="filter2">
            <FormControl sx={{ m: 1, width: "10vw" }}>
              <InputLabel id="demo-multiple-name-label">All Console</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleSelectChange1}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                sx={{
                  color: "white",
                }}
              >
                {plateforms.map((name) => (
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
          </div>
          <div className="filter3">
            <FormControl sx={{ m: 1, width: "10vw" }}>
              <InputLabel id="demo-multiple-name-label">All Plateforms</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleSelectChange2}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                sx={{
                  color: "white",
                }}
              >
                {genre.map((name) => (
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
          </div>
          <div className="filter4">
            <FormControl sx={{ m: 1, width: "10vw" }}>
              <InputLabel id="demo-multiple-name-label">All Regions</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleSelectChange3}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                sx={{
                  color: "white",
                }}
              >
                {regions.map((name) => (
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Gamecategory;
