import Image from "next/image";

import "./HeroImage.scss";

export const HeroImage = () => {
  return (
    <div className="hero-image">
      <Image
          src="https://github.com/claireryberg.png?size=300"
          alt="Avatar for Claire Ryberg of a Meowl"
          className="hero-image__avatar"
          width="300"
          height="300"
        />
      <div className="hero-image__text">
        <h1 className="hero-image__title">Hi, my name is Claire</h1>
        <p>Welcome to my website!</p>
      </div>
    </div>
  );
};
