function Navigation({setPageNum}) {

    const updatePageNum = (event) => {
        setPageNum(event.target.attributes.pagenum.value);
        const links = document.querySelectorAll(".pageLink");
        for(let link of links){
            link.style.color = 'black';
        }
        event.target.style.color = 'white';
    }

    return (
    <nav className="d-flex justify-content-center flex-wrap">
        <h3 className="m-3 pageLink" pagenum="1" onClick={updatePageNum}>
            About Me
        </h3>
        <h3 className="m-3 pageLink" pagenum="2" onClick={updatePageNum}>
            Porfolio
        </h3>
        <h3 className="m-3 pageLink" pagenum="3" onClick={updatePageNum}>
            Contact
        </h3>
        <h3 className="m-3 pageLink" pagenum="4" onClick={updatePageNum}>
            Resume
        </h3>
    </nav>
)}


export default Navigation;