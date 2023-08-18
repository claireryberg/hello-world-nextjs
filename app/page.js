import './page.scss'
import heroImage from '../public/images/morning-mountain-forest__mobile.jpeg'

export default function Home() {
  return (
    <main className="home-page">
      <img
        src={heroImage}
        alt=""
        className="home-page__hero"
        width={100}
        height={24}
        // priority
      />
      <h1>Homepage</h1>
    </main>
  )
}
