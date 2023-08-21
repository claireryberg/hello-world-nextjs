import { ButtonLink } from "../Button/Button";
import "./Navbar.scss";

export const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__links-list">
      <li>
        <ButtonLink href="/">Home</ButtonLink>
      </li>
      <li>
        <ButtonLink href="/about">About</ButtonLink>
      </li>
      <li>
        <ButtonLink href="/contact">Contact</ButtonLink>
      </li>
    </ul>
  </nav>
);
