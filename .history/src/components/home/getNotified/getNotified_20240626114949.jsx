import CustomSvg from '../../customSvg/customSvg';
import Accordion from 'react-bootstrap/Accordion';
import './getNotified.css';

function GetNotified() {
  return (
    <div className='d-flex align-items-center flex-column getContainer'>
        <div className="bg-eb d-flex flex-column justify-content-between getGeneral text-center">
            <div className="fw-500 txt-ff xl-lh-54 getNotified text-center">Stay Ahead with Verion X Updates</div>
            <form action="" className='d-flex'>
              <input type="text" placeholder="Your email address" className='inputText mt-lg-5 mt-4' style={{position:"relative",borderRadius:"30px", padding:"20px 0px 20px 30px", maxWidth:"652px"}}/>
              <button className='bg-eb txt-ff lh-22 fw-400 txt-19' style={{position:"absolute", padding:"12px 40px", borderRadius:"20px"}}>Get Update</button>
            </form>
        </div>
        <div>
            <div className='text-center txt-eb fw-500 lh-34 textFaq mb-2 mt-5'>FAQs</div>
            <div className='text-center fw-500 lh-64 textFre mb-5'>Frequently Asked Questions</div>
            <div className='d-flex flex-wrap gap-3  gap-xl-4 justify-content-center' style={{maxWidth:"1390px"}}>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                {/* <button className='bg-ec d-flex align-items-center justify-content-between' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What is Verion X?</div>
                    <div><CustomSvg name="plus" /></div>
                </button>
                <button className='bg-ec d-flex align-items-center justify-content-between' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What are the courses available on Verion X?</div> 
                    <div><CustomSvg name="plus" /></div>
                </button>
                <button className='bg-ec d-flex align-items-center justify-content-between' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>Is there any cost to use Verion X?</div> 
                    <div><CustomSvg name="plus" /></div>
                  </button>
                <button className='bg-ec d-flex align-items-center justify-content-between' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What are the job opportunities on Varion X?</div> 
                    <div><CustomSvg name="plus" /></div>
                  </button>
                <button className='bg-ec d-flex align-items-center justify-content-between' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>How does the job matching algorithm work?</div> 
                    <div><CustomSvg name="plus" /></div>
                  </button>
                <button className='bg-ec d-flex align-items-center justify-content-between' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>How do I create a profile on Verion X?</div> 
                    <div><CustomSvg name="plus" /></div>
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default GetNotified