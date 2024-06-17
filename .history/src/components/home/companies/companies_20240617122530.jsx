import { getJobOffers } from '../../../data';
import './companies.css';

function Companies() {
  return (
    <div>
        <div></div>
        <div className='d-flex flex-wrap' style={{maxWidth:"1390px", gap:"20px"}}>
            {getJobOffers.map((getJobs) => (
                <>
                <div style={{maxWidth:"295px", borderRadius:"10px", padding:"24px"}}>
                    <div className='d-flex align-items-center'>
                        <div className='me-2'>{getJobs.logo}</div>
                        <div><div className='fw-500 txt-19 lh-22 txt-f3 mb-2'>{getJobs.companyName}</div> <div className='fw-400 txt-13 lh-15'>{getJobs.location}</div></div>
                    </div>
                    <div className='fw-500 txt-19 lh-22'>{getJobs.jobTitle}</div>
                    <div className='fw-400 txt-13 lh-15 txt-f3' style={{maxWidth:"230px"}}>{getJobs.JobRequirement}</div>
                    <div className='d-flex align-items-center justify-content-between' style={{maxWidth:"259px"}}><div className='fw-600 txt-19 lh-22'>{getJobs.salary}</div> <div className='fw-400 txt-13 lh-15'>{getJobs.timePosted}</div></div>
                </div>
                </>
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default Companies