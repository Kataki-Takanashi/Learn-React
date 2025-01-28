import profilePic from './assets/AbdurRaheem_Ali.png'
import Button from './Button/Button';

function Card() {

    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="Ali AbdurRaheem Profile Picture"/>
            <h2 className='card-title'>Ali AbdurRaheem</h2>
            <p className='card-text'>I enjoy 3D printing and video games</p> 
            <Button/>
        </div>
    );
}

export default Card;