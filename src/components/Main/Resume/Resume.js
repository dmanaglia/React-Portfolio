import resume from '../../../assets/Resume.pdf'
import './resume.css';

function Resume(){
    const frontEnd = [
        "HTML", 
        "CSS",
        "JavaScript",
        "jQuery",
        "Responsive Design",
        "React",
        "Bootstrap"
    ]
    const backEnd = [
        "APIs",
        "Node",
        "Express",
        "MySQL, Sequelize",
        "MongoDB, Mongoose",
        "REST",
        "GraphQL"
    ]
    return (
        <div className='mainPage'>
            <h2 className="pageHeader">Resume</h2>
            <p>Link to my <a href={resume} target="_blank" rel="noopener noreferrer">resume</a></p>
            <h4>Front-end Proficiencies</h4>
            <ul>
                {frontEnd.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <h4>Back-end Proficiencies</h4>
            <ul style={{margin: 0}}>
                {backEnd.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Resume;