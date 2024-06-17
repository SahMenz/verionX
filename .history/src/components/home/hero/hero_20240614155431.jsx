import accesYourPerfectImage from '../../../assets/images/accesYourPerfectImage.png';
import CustomSvg from '../../customSvg/customSvg';

function Hero() {
  return (
    <div className='d-flex align-items-center justify-content-between py-4 bg-f5' style={{padding: "0px 100px",}}>
        <div style={{width: "50vw", maxWidth:"800px"}}>
            <div className='txt-63 lh-75 txt-ff fw-600 txt-00' style={{width: "50vw", maxWidth:"733px"}}>Access Your Perfect Career With <span className='bg-eb fw-600 txt-ff py-1 px-3'>VERION X</span></div>
            <div className='txt-00 lh-26 txt-19' style={{width:"39vw", maxWidth:"630px", padding:" 24px 0px 36px 0px"}}>
                Explore top job opportunities, enhance your skills with expert courses, and create a standout CV with our professional templates. Your future starts here.
            </div>
            <div className="search-container mb-4">
                <input type="text" placeholder="Search for any service..."  style={{width:"733px",position:'absolute',borderRadius:"10px", boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.2)"}} className='p-3'/>
                <button className="bg-eb p-3" style={{position:'relative', left:"0px", borderRadius:"10px", border:"none", }}><CustomSvg name="search"/></button>
            </div>
            <div className='d-flex' >
                <div className='txt-19 lh-26 txt-500'>Top Search:</div>
                <div className='d-flex' style={{width:"507px"}}>
                    <button style={{borderRadius:"20px",border: "2px solid black"}}><div className='px-4 py-2 txt-19 lh-22 txt-500'>UX Design</div></button>
                    <button style={{borderRadius:"20px",border: "2px solid black"}}><div className='px-4 py-2 txt-19 lh-22 txt-500'>Web Design</div></button>
                    <button style={{borderRadius:"20px",border: "2px solid black"}}><div className='px-4 py-2 txt-19 lh-22 txt-500'>Technical writing</div></button>
                </div>
            </div>
        </div>
        <img src={accesYourPerfectImage} style={{width: "35vw", maxWidth:"437px"}} alt="three images" />
    </div>
  )
}

export default Hero