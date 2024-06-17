import accesYourPerfectImage from '../../../assets/images/accesYourPerfectImage.png';

function Hero() {
  return (
    <div className='d-flex align-items-center justify-content-between py-4' style={{padding: "0px 100px"}}>
        <div style={{width: "50vw", maxWidth:"733px"}}>
            <div className='txt-63 lh-75 txt-ff fw-600 txt-00'>Access Your Perfect Career With <span className='bg-eb fw-600 txt-ff'>VERION X</span></div>
            <div className='txt-00 lh-26 txt-19'>
                Explore top job opportunities, enhance your skills with expert courses, and create a standout CV with our professional templates. Your future starts here.
            </div>
            <div></div>
            <div></div>
        </div>
        <img src={accesYourPerfectImage} style={{width: "35vw", maxWidth:"437px"}} alt="three images" />
    </div>
  )
}

export default Hero