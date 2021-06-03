import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <ul className='links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li><Link to='/About'>About</Link></li>    
            </ul>
        </nav>
    )
    
}

export default Navbar