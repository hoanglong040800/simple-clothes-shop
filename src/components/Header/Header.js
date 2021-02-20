import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header>
      <h1 className='logo'>Clothes Shop</h1>

      <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/shop' className='link'>Shop</Link>
        <Link to='/about' className='link'>About</Link>
      </nav>
    </header>
  )
}

export default Header



