import Profilepic from './assets/mosaic-3394375_1920.jpg'
import Profilepic2 from './assets/pict.jpg'
import Profilepic3 from './assets/christopher.jpg'
import Profilepic4 from './assets/mo.jpg'

function Card() {
    return(
                <>
                    <div className="card-container">
                        <div className="card">
                            <img className="profile-pic" src={Profilepic} alt="YouTube Channel" />
                            <h2 className="card-title">NO MAD</h2>
                            <p className="card-text">I am Fullstack Developer</p>
                        </div>
                        <div className="card">
                            <img className="profile-pic" src={Profilepic2} alt="YouTube Channel" />
                            <h2 className="card-title">NO MAD</h2>
                            <p className="card-text">I am Fullstack Developer</p>
                        </div>
                        <div className="card">
                            <img className="profile-pic" src={Profilepic3} alt="YouTube Channel" />
                            <h2 className="card-title">NO MAD</h2>
                            <p className="card-text">I am Fullstack Developer</p>
                        </div>
                        <div className="card">
                            <img className="profile-pic" src={Profilepic4} alt="YouTube Channel" />
                            <h2 className="card-title">NO MAD</h2>
                            <p className="card-text">I am Fullstack Developer</p>
                        </div>
                    </div>
                </>
    )
}
export default Card;