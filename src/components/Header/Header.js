import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header>
      <h3 className='logo'>Clothes Shop</h3>

      <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/shop' className='link'>Shop</Link>
        <Link to='about' className='link'>About</Link>
        <Link to='contact' className='link'>Contact</Link>
      </nav>
    </header>
  )
}

export default Header



