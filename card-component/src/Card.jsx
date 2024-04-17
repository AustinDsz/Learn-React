import profilepic from './assets/89303.gif';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture"></img>
            <h2 className='card-title'>Jackson</h2>
            <p className='card-text'>I make youtube videos and play</p>
        </div>
    )
}

export default Card;