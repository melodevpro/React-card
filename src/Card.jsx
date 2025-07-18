import profilePic from './assets/slava.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" />
            <h2>MELO CARD</h2>
            <p>studen react and english</p>
        </div>
    );
}

export default Card 