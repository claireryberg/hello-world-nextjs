import Image from "next/image";

import "./about.scss";

async function getData() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`);
  const result = await data.json();

  const imageSrc = result.sprites.front_default;

  return {
    pokemonImage: imageSrc,
  };
}

export default async function About() {
  const { pokemonImage } = await getData();
  return (
    <main className="about-page">
      <h1>About Me</h1>
      <p>My favorite Pokémon is Eevee</p>
      <Image src={pokemonImage} alt="Eevee" width="150" height="150" />
    </main>
  );
}
