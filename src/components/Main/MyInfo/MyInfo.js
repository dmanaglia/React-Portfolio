import './myInfo.css';

function MyInfo(){
    return (
        <div className='mainPage'>
            <h2 className="pageHeader">About Me</h2>
            <img id="avatar-img" src="https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"></img>
            <p>I am a recent graduate from the University of San Francisco looking to begin a web developement career! I earned my bachelors degree in Theology and Religious studies, a field that has honed my logical thinking which has been quite adventageous in my studied of computer science thus far.</p>
            <p>I have taken many courses in both highschool and college on Java, Python and R, as well as my most recent endeavor: a graduate program through Northwestern University specificly focusing on web developement. Currently I am learned in all prior languages as well as numerous front-end and back-end techniques listed on my resume.</p>
            <p id='lastPara'>I have found programming to be not only rewarding but an extremly enjoyable process of peicing together a logical response to a given request or problem. I am eager to expand my knowledge and learn React Native to ensure I am up to date with the most common practices of the web developement field. I hope to one day soon grow this passion into a full fledged career to continue my learning through hands on experience.</p>
        </div>
    )
}

export default MyInfo;