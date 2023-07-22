import React, { useState, useEffect } from "react";
import Header from "../Header";
import MainView from "../MainView";
import Footer from "../Footer";
import { useQuery } from "react-query";
import { getPokemons } from "../../api/getPokemonData";
import { makeStyles } from "@mui/styles";
import GameRes from "../GameSuccess/GameRes";

const getPokemonIdByUrl = (urlString) => {
  if (urlString) {
    const pathname = new URL(urlString).pathname;
    const pathParts = pathname.split("/");
    const secondLastValue = pathParts[pathParts.length - 2];
    return secondLastValue;
  }
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: window.innerHeight, // Set the container height to 100vh
    display: "flex",
    flexDirection: "column",
  },
  firstComponent: {
    flex: "10%",
  },
  secondComponent: {
    flex: "80%",
    background: "trasparent",
  },
  thirdComponent: {
    flex: "10%",
    background: "trasparent",
  },
}));

const Main = () => {
  const [pokemons, updatePokemons] = useState([]);
  const [activeIndex, updateActiveIndex] = useState(-1);
  const [isButtonClicked, updateButtonClicked] = useState(false);
  const [isCorrect, updateIsCorrect] = useState(true);
  const [currentScore, updateScore] = useState(0);
  const [activeScreen, updateActiveScreen] = useState(0);
  const classes = useStyles();

  const getRandomPoke = (min, max) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    if (random === activeIndex) {
      random = 125;
    }
    return random;
  };

  const handleReset = () => {
    updateActiveIndex(0);
    updateButtonClicked(false);
    updateIsCorrect(true);
    updateScore(0);
    updateActiveScreen(0);
  };

  useEffect(() => {
    if (isButtonClicked && isCorrect) {
      updateScore(currentScore + 1);
      if (currentScore === 20) {
        updateActiveScreen(1);
      }
      updateButtonClicked(false);
    }
    if (isButtonClicked && !isCorrect) {
      updateActiveScreen(2);
    }
  }, [isButtonClicked, isCorrect]);

  const pokemonData = useQuery("pokemons", getPokemons, {
    enabled: false,
  });

  useEffect(() => {
    pokemonData.refetch();
  }, []);

  const updateIndex = () => {
    updateActiveIndex(getRandomPoke(1, 200));
  };

  useEffect(() => {
    if (pokemonData.data) {
      updatePokemons(pokemonData.data?.results);
      // console.log(pokemonData.data?.results);
      updateActiveIndex(0);
    }
  }, [pokemonData.data]);

  const optionColor = isCorrect
    ? "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))"
    : "linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)";
  const defColor = isButtonClicked
    ? optionColor
    : "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";

  return (
    <>
      {activeScreen === 0 && (
        <div
          className={classes.container}
          style={{
            // backgroundImage: defColor,
            backgroundColor: "#164B60",
          }}
        >
          <div className={classes.firstComponent}>
            <Header currentScore={currentScore} />
          </div>

          <div className={classes.secondComponent}>
            <MainView
              pokeName={pokemons[activeIndex]?.name}
              updateIndex={updateIndex}
              staticimage={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${getPokemonIdByUrl(
                pokemons[activeIndex]?.url
              )}.svg`}
              gifImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${getPokemonIdByUrl(
                pokemons[activeIndex]?.url
              )}.gif`}
            />
          </div>

          <div className={classes.thirdComponent}>
            <Footer
              updateIndex={updateIndex}
              correctName={pokemons[activeIndex]?.name}
              incorrectName={pokemons[getRandomPoke(1, 200)]?.name}
              updateButtonClicked={updateButtonClicked}
              updateIsCorrect={updateIsCorrect}
            />
          </div>
        </div>
      )}
      {activeScreen === 1 && (
        <GameRes success={true} handleReset={handleReset} />
      )}
      {activeScreen === 2 && (
        <GameRes success={false} handleReset={handleReset} />
      )}
    </>
  );
};

export default Main;
