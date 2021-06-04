
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
    return(
        <form>
            <span className='span'>Welcome to </span> <span className='span'>Unfiltered</span> <span className='span'>!</span>
            <h2>Please login to your account to continue.</h2>
            
            <label>Username: </label>
            <input required/>
            <br />
            <label>Password: </label>
            <input required/>
            
            <button ><Link to='abcdefgsecure'>Login</Link></button>
        </form>
    )
}

export default Login