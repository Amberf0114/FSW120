import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return(
        <nav className='navbar'>
            <ul className='links'>
               <li><Link to='/'>Login</Link></li>
               <li><Link to='/abcdefgsecure'>UnFiltered</Link></li>
            </ul>
        </nav>
    )
}

export default Nav