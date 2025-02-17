import { Link } from 'react-router-dom'
import title from './images/title.jpg'

function Header() {

    return (
    <header>
        <img src={title} alt='The words "Black Sails" ' className='title'/>
        <div className='dropdown-menu'>
            <button className='dropdown-button'>🧭 Menu ▾</button>
            <ul className='dropdown-content'>
                <li><Link to='/'> ⚓ Homepage </Link></li>
                <li><Link to='/stats'>📜 Basic Facts </Link></li>
                <li><Link to='/cast'>🎭 Cast </Link></li>
                <li><Link to='/characters'>🎭 Characters </Link></li>
                <li><Link to='/shopping'>💰 Shopping </Link></li>
            </ul>
        </div>
    </header>
    )
  }
  
  export default Header