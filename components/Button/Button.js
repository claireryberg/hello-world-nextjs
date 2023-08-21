import Link from 'next/link'
import './Button.scss'

export const Button = ({ children, className, onClick }) => {
  return <button className={`btn-link ${className}`} onClick={onClick}>{children}</button>
}
export const ButtonLink = ({ children, className, href }) => {
  return <Link className={`btn-link ${className}`} href={href}>{children}</Link>
}