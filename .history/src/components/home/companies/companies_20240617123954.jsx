import { getJobOffers } from '../../../data';
import CustomSvg from '../../customSvg/customSvg';
import './companies.css';

function Companies() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div></div>
        <div className='d-flex flex-wrap justify-content-center p-3 p-xl-2' style={{maxWidth:"1390px", gap:"20px"}}>
            {getJobOffers.map((getJobs) => (
                <>
                <div style={{maxWidth:"295px", borderRadius:"10px", boxShadow:"0px 0px 3px 3px rgba(0, 0, 0, 0.2)",padding:"24px"}}>
                    <div className='d-flex align-items-center' style={{marginBottom:"28px"}}>
                        <div className='me-2'>{getJobs.logo}</div>
                        <div><div className='fw-500 txt-19 lh-22 mb-2'>{getJobs.companyName}</div> <div className='fw-400 txt-13 lh-15 txt-f3'>{getJobs.location}</div></div>
                    </div>
                    <div className='fw-500 txt-19 lh-22' style={{marginBottom:"10px"}}>{getJobs.jobTitle}</div>
                    <div className='fw-400 txt-13 lh-15 txt-f3' style={{maxWidth:"230px", marginBottom:"23px"}}>{getJobs.JobRequirement}</div>
                    <div className='d-flex align-items-center justify-content-between' style={{maxWidth:"259px"}}><div className='fw-600 txt-19 lh-22'>{getJobs.salary}</div> <div className='fw-400 txt-13 lh-15'>{getJobs.timePosted}</div></div>
                </div>
                </>
            ))}
        </div>
        <button className='d-flex bg-ff align-items-center justify-content-center' style={{maxWidth:"85",border:"1px solid black",borderRadius:"30px", padding:"11px 31px"}}><div className='fw-500 txt-16 lh-19'>show more</div><div><CustomSvg name="dropDownArrow"/></div></button>
    </div>
  )
}

export default Companies