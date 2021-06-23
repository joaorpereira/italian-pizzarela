import { menuList } from './constants'
import './styles.css'

import HamburgerIcon from '../../assets/hamburger_icon.svg'
import { useState } from 'react'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(prev => !prev)

  return (
    <nav className='menu'>
      <div className='hamburger__link' onClick={toggleMenu}>
        <img src={HamburgerIcon} alt={HamburgerIcon} />
      </div>
      <a className='menu__link' href='/'>
        Home
      </a>
      <ul className={showMenu ? 'menu__list active' : 'menu__list'}>
        {menuList.map((item, index) => (
          <li key={item.id}>
            <a
              className={
                showMenu
                  ? `menu__link item_${index} active`
                  : `menu__link item_${index}`
              }
              href={item.id}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
