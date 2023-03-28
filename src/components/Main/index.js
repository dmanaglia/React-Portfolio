import MyInfo from './MyInfo/index';
import Portfolio from './Portfolio/index';
import Contact from './Contact/index';
import Resume from './Resume/index';

function Main({pageNum}) {
    switch(pageNum) {
        case "1":
            return <MyInfo/>
        case "2":
            return <Portfolio/>
        case "3":
            return <Contact/>
        default:
            return <Resume/>
    }
}


export default Main;