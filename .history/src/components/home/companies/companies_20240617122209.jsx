import { getJobOffers } from '../../../data';
import './companies.css';

function Companies() {
  return (
    <div>
        <div></div>
        <div className='' style={{maxWidth:"295px"}}>
            {getJobOffers.map((getJobs) => (
                <>
                <div style={{maxWidth:"295px", borderRadius:"10px"}}>
                    <div className='d-flex'>
                        <div className=''>{getJobs.logo}</div>
                        <div><div className='fw-500 txt-19 lh-22 txt-f3'>{getJobs.companyName}</div> <div className='fw-400 txt-13 lh-15'>{getJobs.location}</div></div>
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