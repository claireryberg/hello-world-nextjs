import { ButtonLink } from '../ButtonLink/ButtonLink'
import './Navbar.scss'

export const Navbar = () => (
  <nav className="navbar">
    <ul className='navbar__links-list'>
      <li><ButtonLink caption='Home' href='./' /></li>
      <li><ButtonLink caption='About' href='./about' /></li>
      <li><ButtonLink caption='Contact' href='./contact' /></li>
    </ul>
  </nav>
)