import Project from './Project/index'
function Portfolio(){
    const myProjects = [
        {
            name: "First Project",
            description: "Full Stack",
            liveLink: "https://www.google.com/",
            gitHubLink: "https://github.com/"
        },
        {
            name: "Second Project",
            description: "Full Stack",
            liveLink: "https://www.google.com/",
            gitHubLink: "https://github.com/"
        },
        {
            name: "Third Project",
            description: "Full Stack",
            liveLink: "https://www.google.com/",
            gitHubLink: "https://github.com/"
        },
        {
            name: "Fourth Project",
            description: "Full Stack",
            liveLink: "https://www.google.com/",
            gitHubLink: "https://github.com/"
        },
        {
            name: "Fifth Project",
            description: "Full Stack",
            liveLink: "https://www.google.com/",
            gitHubLink: "https://github.com/"
        },
    ]
    return (
        <div>
            <h2 className="pageHeader">Portfolio</h2>
            <div className="container px-4 text-center">
                <div className="row gx-5">
                    {myProjects.map((item, index) => (
                        <div className="col-6">
                            <div className="p-3">
                                <Project projectinfo={item} index={index}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;