// import Image from "next/image";

import "./HeroImage.scss";

export const HeroImage = () => {
  return (
    <div className="hero-image">
      {/* <Image
          src=""
          alt=""
          className="hero-image__avatar"
          width="300"
          height="300"
        /> */}
      <div className="hero-image__text">
        <h1 className="hero-image__title">Hello World</h1>
        <p>Welcome to my website!</p>
      </div>
    </div>
  );
};
