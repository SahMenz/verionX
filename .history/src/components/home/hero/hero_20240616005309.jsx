import accesYourPerfectImage from '../../../assets/images/accesYourPerfectImage.png';
import CustomSvg from '../../customSvg/customSvg';
import './hero.css';

function Hero() {
  return (
    <div className='bg-f5 heroGeneral d-flex flex-column flex-xl-row justify-content-center justify-content-between align-items-center' style={{}}>
        <div style={{maxWidth:"733px"}} className=' textcontainer mb-5 mx-xxl-1 px-xxl-0 me-xl-3 d-flex flex-column container '>
            <div className='txt-63 lh-75 txt-ff fw-600 txt-00 largeTxt mb-5' >Access Your Perfect Career With <span className='bg-eb fw-600 txt-ff py-1 px-3'>VERION X</span></div>
            <div className='txt-00 lh-26 mb-4 exploretxt' style={{maxWidth:"630px"}}>
                Explore top job opportunities, enhance your skills with expert courses, and create a standout CV with our professional templates. Your future starts here.
            </div>
            <div className="d-flex">
                <input type="text" className='p-3 container mb-xl-5' placeholder="Search for any service..."  style={{borderRadius:"10px", boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.2)"}} />
                <button className="bg-eb p-3 mb-xl-5" style={{borderRadius:"10px", border:"none"}}><CustomSvg name="search"/></button>
            </div>
            <div className='d-none d-xl-flex align-items-center justify-content-between'style={{width:"642px"}} >
                <div className='txt-19 lh-26 txt-500'>Top Search:</div>
                <div className='d-flex align-items-center justify-content-between' style={{width:"507px"}}>
                    <button style={{borderRadius:"20px",border: "2px solid black"}}><div className='px-4 py-2 txt-19 lh-22 txt-500'>UX Design</div></button>
                    <button style={{borderRadius:"20px",border: "2px solid black"}}><div className='px-4 py-2 txt-19 lh-22 txt-500'>Web Design</div></button>
                    <button style={{borderRadius:"20px",border: "2px solid black"}}><div className='px-4 py-2 txt-19 lh-22 txt-500'>Technical writing</div></button>
                </div>
            </div>
        </div>
        <img src={accesYourPerfectImage} className='container mx-xxl-1 ms-xl-3 px-xxl-0' style={{Width:"65vw", maxWidth:"473px"}} alt="three images" />
    </div>
  )
}

export default Hero