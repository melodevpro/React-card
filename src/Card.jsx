import profilePic from './assets/slava.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" className="profile-pic"/>
            <h2 className='card-title'>MELO CARD</h2>
            <p className='card-text'>studen react and english</p>
        </div>
    );
}

export default Card 