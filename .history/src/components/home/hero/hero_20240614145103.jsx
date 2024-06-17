import accesYourPerfectImage from '../../../assets/images/accesYourPerfectImage.png';
import CustomSvg from '../../customSvg/customSvg';

function Hero() {
  return (
    <div className='d-flex align-items-center justify-content-between py-4 bg-f5' style={{padding: "0px 100px",}}>
        <div style={{width: "50vw", maxWidth:"733px"}}>
            <div className='txt-63 lh-75 txt-ff fw-600 txt-00' style={{width: "50vw", maxWidth:"733px"}}>Access Your Perfect Career With <span className='bg-eb fw-600 txt-ff'>VERION X</span></div>
            <div className='txt-00 lh-26 txt-19' style={{width:"39vw", maxWidth:"630px", padding:" 24px 0px 36px 0px"}}>
                Explore top job opportunities, enhance your skills with expert courses, and create a standout CV with our professional templates. Your future starts here.
            </div>
            <div className="search-container" >
                <input type="text" placeholder="Search..."  style={{width: "733px"}}/>
                <button><CustomSvg name="search" className="bg-eb p-2" style={{borderRadius:"10px" ,position: "absolute", right: "5px", top:"50%", transform: "translateY(-50%)"}}/></button>
            </div>
            <div></div>
        </div>
        <img src={accesYourPerfectImage} style={{width: "35vw", maxWidth:"437px"}} alt="three images" />
    </div>
  )
}

export default Hero