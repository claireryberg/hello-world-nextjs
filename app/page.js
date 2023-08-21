import "./page.scss";
import { HeroImage } from "../components/HeroImage/HeroImage";
import { LoremIpsum } from "../components/LoremIpsum/LoremIpsum";

export default function Home() {
  return (
    <main className="home-page">
      {/* Add the HeroImage component here */}
      <div className="home-page__content">
        <h2 className="home-page__content-title">Home Page</h2>
      </div>
    </main>
  );
}
