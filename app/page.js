import "./page.scss";
import { HeroImage } from "../components/HeroImage/HeroImage";
import { LoremIpsum } from "../components/LoremIpsum/LoremIpsum";
import { DadJokeGenerator } from "../components/DadJokeGenerator/DadJokeGenerator";

export default function Home() {
  return (
    <main className="home-page">
      <HeroImage />
      <div className="home-page__content">
        <DadJokeGenerator className="home-page__jokes" />
        <h2 className="home-page__content-title">Lorem Ipsum, to make the page longer</h2>
        <LoremIpsum />
      </div>
    </main>
  );
}
