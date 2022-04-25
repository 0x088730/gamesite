import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import React, { useState, useEffect } from "react";
import "./style.css";
const dataArray = [
  {
    gamelogo: "gameimagelogo/Games_Logos/8ball.png",
    gameimage: "gameimagelogo/Games_imgs/8ball.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/apex.png",
    gameimage: "gameimagelogo/Games_imgs/apex.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/asphalt9.png",
    gameimage: "gameimagelogo/Games_imgs/asphalt.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/BGMI.png",
    gameimage: "gameimagelogo/Games_imgs/BGMI.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/Brawlstars.png",
    gameimage: "gameimagelogo/Games_imgs/brawl_stars.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/BRAWLHALLA.png",
    gameimage: "gameimagelogo/Games_imgs/BRAWLHALLA.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/CLASH_mini.png",
    gameimage: "gameimagelogo/Games_imgs/CLASH_mini.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/clash_of_clans.png",
    gameimage: "gameimagelogo/Games_imgs/clash_of_clans.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/clash-royale 2.png",
    gameimage: "gameimagelogo/Games_imgs/clash-royale 2.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/CODGeneric.png",
    gameimage: "gameimagelogo/Games_imgs/CODGeneric.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/CSGO.png",
    gameimage: "gameimagelogo/Games_imgs/CSGO.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/fifa21.jpg",
    gameimage: "gameimagelogo/Games_imgs/fifa21.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/FIFA22.png",
    gameimage: "gameimagelogo/Games_imgs/FIFA22.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/fortnite.png",
    gameimage: "gameimagelogo/Games_imgs/fortnite.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/freefire.png",
    gameimage: "gameimagelogo/Games_imgs/freefire.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/guilty.jpg",
    gameimage: "gameimagelogo/Games_imgs/guilty.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/HALO infinite.png",
    gameimage: "gameimagelogo/Games_imgs/HALO infinite.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/karunker.jpg",
    gameimage: "gameimagelogo/Games_imgs/karunker.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/leagueoflegends.jpg",
    gameimage: "gameimagelogo/Games_imgs/leagueoflegends.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/ludo.jpg",
    gameimage: "gameimagelogo/Games_imgs/ludo.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/madden.jpg",
    gameimage: "gameimagelogo/Games_imgs/madden.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/mobile_legends.jpg",
    gameimage: "gameimagelogo/Games_imgs/mobile_legends.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/nba22.jpg",
    gameimage: "gameimagelogo/Games_imgs/nba22.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/overwatch.jpg",
    gameimage: "gameimagelogo/Games_imgs/overwatch.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/pokemon.jpg",
    gameimage: "gameimagelogo/Games_imgs/pokemon.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/Rainbow Six.png",
    gameimage: "gameimagelogo/Games_imgs/Rainbow Six.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/Rocket League.png",
    gameimage: "gameimagelogo/Games_imgs/Rocket League.png",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/supersmash_bro.jpg",
    gameimage: "gameimagelogo/Games_imgs/supersmash_bro.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/tekken7.jpg",
    gameimage: "gameimagelogo/Games_imgs/tekken7.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/valorant.jpg",
    gameimage: "gameimagelogo/Games_imgs/valorant.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_Logos/wildrift.jpg",
    gameimage: "gameimagelogo/Games_imgs/wildrift.jpg",
  },
];

const GameImage = () => {
  const [page, setPage] = useState(1);
  const [pagenumber, setpagenumber] = useState(15);
  const [exactlyPage, setexactlyPage] = useState();

  const handleChange = (event, value) => {
    setPage(value);
  };
  let origin = 0;
  useEffect(() => {
    setexactlyPage(Math.ceil(dataArray.length / pagenumber));
  });

  return (
    <>
      <div className="flex-gameImage">
        {dataArray.slice(origin, 15).map((item, i) => (
          <div className="game-image zoomin frame" key={i}>
            <img src={item.gameimage} alt="image" className="imgSize" />
            <div class="overlay">
              {/* <img src={item.gamelogo} alt="" className="logoZoom"/> */}
            </div>
          </div>
        ))}
        <div className="flex-pagination">
          <Stack spacing={2}>
            <Pagination
              count={exactlyPage}
              page={page}
              showFirstButton
              showLastButton
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};
export default GameImage;
