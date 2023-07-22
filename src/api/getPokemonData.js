import axios from "axios";

export const getPokemons = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=200"
  );
  return data;
};
