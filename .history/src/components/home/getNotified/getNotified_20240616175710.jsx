import './getNotified.css';

function GetNotified() {
  return (
    <div className='d-flex align-items-center flex-column getContainer'>
        <div className="bg-eb d-flex flex-column justify-content-between getGeneral text-center">
            <div className="fw-500 txt-ff xl-lh-54 getNotified text-center">Get Notified Your Every New Job </div>
            <input type="text" placeholder="Your email address" className='inputText mt-lg-5 mt-4' style={{borderRadius:"30px", padding:"20px 0px 20px 30px", maxWidth:"652px"}}/>
        </div>
        <div>
            <div className='text-center fw-500 txt-23 '>FAQs</div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default GetNotified