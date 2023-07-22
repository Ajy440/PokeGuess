import axios from "axios";

export const getPokemonImage = async (id) => {
  const { data } = await axios.get(
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id.queryKey[1]}.svg`
  );
  // console.log("image", data);
  const regex = /<img[^>]*src="([^"]*)"[^>]*>/i;
  const match = data.match(regex);

  if (match && match[1]) {
    const imgSrc = match[1];
    console.log(imgSrc);
  }

  return data;
};
