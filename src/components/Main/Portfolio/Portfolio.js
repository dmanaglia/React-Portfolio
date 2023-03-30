import movieImg from '../../../assets/movie.jpeg';
import musicImg from '../../../assets/music-notes.avif';
import brickImg from '../../../assets/brick.jpeg';
import chalkImg from '../../../assets/chalk.jpeg';
import waterfallImg from '../../../assets/waterfall.jpeg';
import codeImg from '../../../assets/code.jpeg';
import Project from './Project/Project.js';
import './portfolio.css';

function Portfolio(){
    const myProjects = [
        {
            name: "Movie Media Mania",
            description: "Full Stack",
            liveLink: "https://mighty-plains-34884.herokuapp.com/",
            gitHubLink: "https://github.com/dmanaglia/Social-Movie-Media",
            img: movieImg
        },
        {
            name: "Music Dashboard",
            description: "JS & Third Party APIs",
            liveLink: "https://justincanavanmusic.github.io/music-dashboard/",
            gitHubLink: "https://github.com/justincanavanmusic/music-dashboard",
            img: musicImg
        },
        {
            name: "Tech Blog",
            description: "Full Stack",
            liveLink: "https://fast-tor-38404.herokuapp.com/",
            gitHubLink: "https://github.com/dmanaglia/Tech-Blog",
            img: codeImg
        },
        {
            name: "Text Editor",
            description: "PWA",
            liveLink: "https://mighty-peak-64064.herokuapp.com/",
            gitHubLink: "https://github.com/dmanaglia/Text-Editor-PWA",
            img: brickImg
        },
        {
            name: "Note Taker",
            description: "Full Stack",
            liveLink: "https://fast-journey-23206.herokuapp.com/",
            gitHubLink: "https://github.com/dmanaglia/Note-Taker",
            img: chalkImg
        },
        {
            name: "Weather Dashboard",
            description: "JS & Third Party APIs",
            liveLink: "https://dmanaglia.github.io/Weather-Dashboard/",
            gitHubLink: "https://github.com/dmanaglia/Weather-Dashboard",
            img: waterfallImg
        }
    ]
    return (
        <div className='mainPage'>
            <h2 className="pageHeader">Portfolio</h2>
                <div className="d-flex flex-wrap responsiveFlex">
                    {myProjects.map((item, index) => (
                        <Project projectinfo={item} key={index}/>
                    ))}
                </div>
        </div>
    )
}

export default Portfolio;