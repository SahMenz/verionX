import CustomSvg from '../../customSvg/customSvg';
import './getNotified.css';

function GetNotified() {
  return (
    <div className='d-flex align-items-center flex-column getContainer'>
        <div className="bg-eb d-flex flex-column justify-content-between getGeneral text-center">
            <div className="fw-500 txt-ff xl-lh-54 getNotified text-center">Get Notified Your Every New Job </div>
            <input type="text" placeholder="Your email address" className='inputText mt-lg-5 mt-4' style={{borderRadius:"30px", padding:"20px 0px 20px 30px", maxWidth:"652px"}}/>
        </div>
        <div>
            <div className='text-center fw-500 lh-34'>FAQs</div>
            <div className='text-center fw-500 lh-64'>Frequently Asked Questions</div>
            <div>
                <button className='bg-ec d-flex' style={{borderRadius:"20px", padding:"18px 0px 29px 18px"}}><div className='fw-400 txt-23 lh-34'>What is Verion X?</div> <div><CustomSvg name="plus" /></div></button>
                <button className='bg-ec d-flex' style={{borderRadius:"20px", padding:"18px 0px 29px 18px"}}><div className='fw-400 txt-23 lh-34'>How do I create a profile on Verion X?</div> <div><CustomSvg name="plus" /></div></button>
                <button className='bg-ec d-flex' style={{borderRadius:"20px", padding:"18px 0px 29px 18px"}}><div className='fw-400 txt-23 lh-34'>How does the job matching algorithm work?</div> <div><CustomSvg name="plus" /></div></button>
                <button className='bg-ec d-flex' style={{borderRadius:"20px", padding:"18px 0px 29px 18px"}}><div className='fw-400 txt-23 lh-34'>What are the courses available on Verion X?</div> <div><CustomSvg name="plus" /></div></button>
                <button className='bg-ec d-flex' style={{borderRadius:"20px", padding:"18px 0px 29px 18px"}}><div className='fw-400 txt-23 lh-34'>Is there any cost to use Verion X?</div> <div><CustomSvg name="plus" /></div></button>
                <button className='bg-ec d-flex' style={{borderRadius:"20px", padding:"18px 0px 29px 18px"}}><div className='fw-400 txt-23 lh-34'>What are the job opportunities on Varion X?</div> <div><CustomSvg name="plus" /></div></button>
            </div>
        </div>
    </div>
  )
}

export default GetNotified