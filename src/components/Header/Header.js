import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header>
      <h3>Logo Header</h3>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
      </nav>
    </header>
  )
}

export default Header



