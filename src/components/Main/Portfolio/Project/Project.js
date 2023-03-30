import gitHubIcon from '../../../../assets/github-logo.svg';

function Project({projectinfo}) {
    return (
        <div className="card text-bg-dark customCard">
            <img src={projectinfo.img} className="card-img" alt={projectinfo.name}></img>
            <div className="card-img-overlay myOverlay">
                <div className='d-flex flex-column position-absolute top-50 start-50 translate-middle w-100'>
                    <h5 className="card-title project-info">
                        <a href={projectinfo.liveLink} target="_blank" rel="noopener noreferrer" className='project-title'>{projectinfo.name}</a>
                        <a href={projectinfo.gitHubLink} target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} className="project-logo" alt='githubLogo'></img></a>
                    </h5>
                    <p className="card-text project-info">{projectinfo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;