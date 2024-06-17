import accesYourPerfectImage from '../../../assets/images/accesYourPerfectImage.png';

function Hero() {
  return (
    <div className='d-flex align-items-center justify-content-between py-4' style={{padding: "0px 100px"}}>
        <div style={{width: "50vw"}}>
            <div className='txt-63 lh-75 txt-ff fw-600 txt-00'>Access Your Perfect Career With <span className='bg-eb fw-600 txt-ff'>VERION X</span></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <img src={accesYourPerfectImage} style={{width: "45vw"}} alt="three images" />
    </div>
  )
}

export default Hero