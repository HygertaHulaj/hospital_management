import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        CareMed Hospital
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/departments">Departments</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/doctors">Doctors</CustomLink>
        <CustomLink to="/branches">Branches</CustomLink> 
        <CustomLink to="/patient">Patient</CustomLink>
        <CustomLink to="/login">Login</CustomLink>


      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
