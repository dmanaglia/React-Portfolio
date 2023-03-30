import Navigation from './Navigation';
import './header.css';

function Header({setPageNum}) {
    return (
    <header className='d-flex justify-content-between align-items-center px-5 flex-wrap'>
        <h1>Daniel Managlia</h1>
        <Navigation setPageNum={setPageNum}/>
    </header>
)}


export default Header;