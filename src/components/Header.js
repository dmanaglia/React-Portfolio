import Navigation from './Navigation';

function Header({setPageNum}) {
    return (
    <header className='d-flex justify-content-between align-items-center mx-5'>
        <h1>Daniel Managlia</h1>
        <Navigation setPageNum={setPageNum}/>
    </header>
)}


export default Header;