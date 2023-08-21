import { ButtonLink } from '../Button/Button'

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <h2>Thank you for visiting</h2>
      <ButtonLink className="footer__btn-link" href="/contact">Contact</ButtonLink>
      <p className="footer__copyright">© copyright 2023</p>
    </footer>
  );
};
