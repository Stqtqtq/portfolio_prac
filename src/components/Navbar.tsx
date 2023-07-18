import './Navbar.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import LinkedIn from '../assets/linkedIn.svg'
import Instagram from '../assets/instagram.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Logo</p>
      <div className='social-icon'>
        <a
          href="https://www.linkedin.com/in/tian-quan-sim-1b53631b7/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" className='img-linkedin'/>
        </a>
        <a
          href="https://www.instagram.com/tqtqtqtqtq/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Instagram" className='img-instagram'/>
        </a>
      </div>
    </div>
  )
}

export default Navbar
