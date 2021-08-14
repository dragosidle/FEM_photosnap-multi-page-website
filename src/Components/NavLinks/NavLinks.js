import './NavLinks.css'

const NavLinks = (props) => {
  return (
    <ul className={props.styling}>
      {props.footer && <li>Home</li>}
      <li>Stories</li>
      <li>Features</li>
      <li>Pricing</li>
    </ul>
  )
}

export default NavLinks
