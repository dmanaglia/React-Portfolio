import MyInfo from './MyInfo/MyInfo.js';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/ContactForm.js';
import Resume from './Resume/Resume.js';
import './main.css';

function Main({pageNum}) {
    switch(pageNum) {
        case "1":
            return <main><MyInfo/></main>
        case "2":
            return <main><Portfolio/></main>
        case "3":
            return <main><Contact/></main>
        default:
            return <main><Resume/></main>
    }
}


export default Main;