import accesYourPerfectImage from '../../../assets/images/accessCoursesImage.png';

function Hero() {
  return (
    <div className='d-flex' style={{}}>
        <div>
            <div className='txt-63 lh-75 txt-ff fw-600 txt-00'>Access Your Perfect Career With <span className='bg-eb fw-600 txt-ff'>VERION X</span></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <img src={accesYourPerfectImage} style={{width: "100vw"}} alt="three images" />
    </div>
  )
}

export default Hero