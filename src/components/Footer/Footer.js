import ghLogo from '../../assets/github-logo.svg';
import liLogo from '../../assets/LinkedIn-logo.svg';
import soLogo from '../../assets/StackOverflow-logo.svg';
import './footer.css';

function Footer() {
    return (
    <footer className='d-flex justify-content-center align-items-center flex-wrap'>
        <a href='https://github.com/dmanaglia' target='_blank' rel="noopener noreferrer"><img src={ghLogo} className="logo" alt="gitHub-Logo"/></a>
        <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer"><img src={liLogo} className="logo" alt="gitHub-Logo"/></a>
        <a href='https://stackoverflow.com/' target='_blank' rel="noopener noreferrer"><img src={soLogo} className="logo" alt="gitHub-Logo"/></a>
    </footer>
)}


export default Footer;