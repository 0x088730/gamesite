import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import React, { useState, useEffect } from "react";
import "./style.css";
const dataArray = [
  {
    gamelogo: "gameimagelogo/Games_imgs/8ball.png",
    gameimage: "gameimagelogo/Games_imgs/8ball.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/apex.png",
    gameimage: "gameimagelogo/Games_imgs/apex.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/asphalt.png",
    gameimage: "gameimagelogo/Games_imgs/asphalt.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/BGMI.png",
    gameimage: "gameimagelogo/Games_imgs/BGMI.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/brawl_stars.png",
    gameimage: "gameimagelogo/Games_imgs/brawl_stars.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/BRAWLHALLA.png",
    gameimage: "gameimagelogo/Games_imgs/BRAWLHALLA.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/CLASH_mini.png",
    gameimage: "gameimagelogo/Games_imgs/CLASH_mini.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/clash_of_clans.png",
    gameimage: "gameimagelogo/Games_imgs/clash_of_clans.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/clash-royale 2.png",
    gameimage: "gameimagelogo/Games_imgs/clash-royale 2.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/CODGeneric.png",
    gameimage: "gameimagelogo/Games_imgs/CODGeneric.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/CSGO.png",
    gameimage: "gameimagelogo/Games_imgs/CSGO.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/fifa21.jpg",
    gameimage: "gameimagelogo/Games_imgs/fifa21.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/FIFA22.png",
    gameimage: "gameimagelogo/Games_imgs/FIFA22.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/fortnite.png",
    gameimage: "gameimagelogo/Games_imgs/fortnite.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/freefire.png",
    gameimage: "gameimagelogo/Games_imgs/freefire.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/guilty.jpg",
    gameimage: "gameimagelogo/Games_imgs/guilty.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/HALO infinite.png",
    gameimage: "gameimagelogo/Games_imgs/HALO infinite.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/karunker.jpg",
    gameimage: "gameimagelogo/Games_imgs/karunker.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/leagueoflegends.jpg",
    gameimage: "gameimagelogo/Games_imgs/leagueoflegends.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/ludo.jpg",
    gameimage: "gameimagelogo/Games_imgs/ludo.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/madden.jpg",
    gameimage: "gameimagelogo/Games_imgs/madden.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/mobile_legends.jpg",
    gameimage: "gameimagelogo/Games_imgs/mobile_legends.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/nba22.jpg",
    gameimage: "gameimagelogo/Games_imgs/nba22.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/overwatch.jpg",
    gameimage: "gameimagelogo/Games_imgs/overwatch.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/pokemon.jpg",
    gameimage: "gameimagelogo/Games_imgs/pokemon.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/Rainbow Six.png",
    gameimage: "gameimagelogo/Games_imgs/Rainbow Six.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/Rocket League.png",
    gameimage: "gameimagelogo/Games_imgs/Rocket League.png",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/supersmash_bro.jpg",
    gameimage: "gameimagelogo/Games_imgs/supersmash_bro.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/tekken7.jpg",
    gameimage: "gameimagelogo/Games_imgs/tekken7.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/valorant.jpg",
    gameimage: "gameimagelogo/Games_imgs/valorant.jpg",
  },
  {
    gamelogo: "gameimagelogo/Games_imgs/wildrift.jpg",
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
          <div className="game-image" key={i}>
            <img src={item.gameimage} alt="image" className="imgSize" />
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
