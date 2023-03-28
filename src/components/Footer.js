import ghLogo from './../assets/github-logo.svg';
import liLogo from './../assets/LinkedIn-logo.svg';
import soLogo from './../assets/StackOverflow-logo.svg';

function Footer() {
    return (
    <footer className='d-flex justify-content-center align-items-center'>
        <img src={ghLogo} id="ghLogo" className="logo" alt="gitHub-Logo"/>
        <img src={liLogo} className="logo" alt="gitHub-Logo"/>
        <img src={soLogo} className="logo" alt="gitHub-Logo"/>
    </footer>
)}


export default Footer;