import musicImg from '../../../../assets/music-notes.avif';
import brickImg from '../../../../assets/brick.jpeg';
import chalkImg from '../../../../assets/chalk.jpeg';
import waterfallImg from '../../../../assets/waterfall.jpeg';
import codeImg from '../../../../assets/code.jpeg';
import gitHubIcon from '../../../../assets/github-logo.svg';

function Project({projectinfo, index}) {
    const images = [musicImg, brickImg, chalkImg, waterfallImg, codeImg]
    return (
        <div className="card text-bg-dark">
            <img src={images[index]} className="card-img" alt={projectinfo.name}></img>
            <div className="card-img-overlay myOverlay">
                <h5 className="card-title"><a href={projectinfo.liveLink} target="_blank">{projectinfo.name}</a></h5>
                <p className="card-text">{projectinfo.description}</p>
                <a href={projectinfo.gitHubLink} target="_blank"><img src={gitHubIcon} className="project-ghicon"></img></a>
            </div>
        </div>
    )
}

export default Project;