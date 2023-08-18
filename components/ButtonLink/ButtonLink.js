import Link from 'next/link'
import './ButtonLink.scss'

export const ButtonLink = ({ caption, href, className }) => {
  return <Link className={`btn-link ${className}`} href={href}>{caption}</Link>
}