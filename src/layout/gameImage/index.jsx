import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import "./style.css";
const dataArray = [
  {
    gamelogo: "game_imgs+logos/Games_imgs/8ball.png",
    gameimage: "game_imgs+logos/Games_imgs/8ball.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/apex.png",
    gameimage: "game_imgs+logos/Games_imgs/apex.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/asphalt.png",
    gameimage: "game_imgs+logos/Games_imgs/asphalt.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/BGMI.png",
    gameimage: "game_imgs+logos/Games_imgs/BGMI.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/brawl_stars.png",
    gameimage: "game_imgs+logos/Games_imgs/brawl_stars.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/BRAWLHALLA.png",
    gameimage: "game_imgs+logos/Games_imgs/BRAWLHALLA.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/CLASH_mini.png",
    gameimage: "game_imgs+logos/Games_imgs/CLASH_mini.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/clash_of_clans.png",
    gameimage: "game_imgs+logos/Games_imgs/clash_of_clans.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/clash-royale 2.png",
    gameimage: "game_imgs+logos/Games_imgs/clash-royale 2.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/CODGeneric.png",
    gameimage: "game_imgs+logos/Games_imgs/CODGeneric.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/CSGO.png",
    gameimage: "game_imgs+logos/Games_imgs/CSGO.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/fifa21.jpg",
    gameimage: "game_imgs+logos/Games_imgs/fifa21.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/FIFA22.png",
    gameimage: "game_imgs+logos/Games_imgs/FIFA22.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/fortnite.png",
    gameimage: "game_imgs+logos/Games_imgs/fortnite.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/freefire.png",
    gameimage: "game_imgs+logos/Games_imgs/freefire.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/guilty.jpg",
    gameimage: "game_imgs+logos/Games_imgs/guilty.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/HALO infinite.png",
    gameimage: "game_imgs+logos/Games_imgs/HALO infinite.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/karunker.jpg",
    gameimage: "game_imgs+logos/Games_imgs/karunker.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/leagueoflegends.jpg",
    gameimage: "game_imgs+logos/Games_imgs/leagueoflegends.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/ludo.jpg",
    gameimage: "game_imgs+logos/Games_imgs/ludo.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/madden.jpg",
    gameimage: "game_imgs+logos/Games_imgs/madden.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/mobile_legends.jpg",
    gameimage: "game_imgs+logos/Games_imgs/mobile_legends.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/nba22.jpg",
    gameimage: "game_imgs+logos/Games_imgs/nba22.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/overwatch.jpg",
    gameimage: "game_imgs+logos/Games_imgs/overwatch.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/pokemon.jpg",
    gameimage: "game_imgs+logos/Games_imgs/pokemon.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/Rainbow Six.png",
    gameimage: "game_imgs+logos/Games_imgs/Rainbow Six.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/Rocket League.png",
    gameimage: "game_imgs+logos/Games_imgs/Rocket League.png",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/supersmash_bro.jpg",
    gameimage: "game_imgs+logos/Games_imgs/supersmash_bro.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/tekken7.jpg",
    gameimage: "game_imgs+logos/Games_imgs/tekken7.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/valorant.jpg",
    gameimage: "game_imgs+logos/Games_imgs/valorant.jpg",
  },
  {
    gamelogo: "game_imgs+logos/Games_imgs/wildrift.jpg",
    gameimage: "game_imgs+logos/Games_imgs/wildrift.jpg",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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

        {/* <div className="game-image">
            <img src="./game_imgs+logos/Games_imgs/HALO infinite.png" alt="" id="imgSize"/>
        </div>
        <div className="game-image">
            <img src="./game_imgs+logos/Games_imgs/HALO infinite.png" alt="" id="imgSize"/>
        </div>
        <div className="game-image">
            <img src="./game_imgs+logos/Games_imgs/HALO infinite.png" alt="" id="imgSize"/>
        </div> */}
      </div>
    </>
  );
};
export default GameImage;
