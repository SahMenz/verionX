import logo from '../../assets/images/logo.svg';
import CustomSvg from '../customSvg/customSvg';

function Footer() {
  return (
    <div>
        <div>
            <img  src={logo}/>
            <div>
                At Verion X, we believe that finding your ideal job should be a 
                seamless and empowering experience. Our platform is dedicated to connecting talented 
                professionals with employers who appreciate and value their unique skills and ambitions
            </div>
            <div>
                <button><CustomSvg name="x"/></button>
                <button><CustomSvg name="facebook"/></button>
                <button><CustomSvg name="insta"/></button>
                <button><CustomSvg name="linkedin"/></button>
            </div>
        </div>
        <div>
            <div>Explore</div>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Find Jobs</a>
            <a href="#">Courses</a>
        </div>
        <div>
            <div>Quick Links</div>
            <a href="#">Create Cv</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Term Of Use</a>
        </div>
        <div>
            <div>Our Newsletter</div>
            <div>
            <input  type='text' style={{borderRadius:"30px", padding:"19px"}}/>
            <CustomSvg name="telegram"/>
            </div>
        </div>
    </div>
  )
}

export default Footer