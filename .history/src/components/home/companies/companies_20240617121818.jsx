import { getJobOffers } from '../../../data';
import './companies.css';

function Companies() {
  return (
    <div>
        <div></div>
        <div>
            {getJobOffers.map((getJobs) => (
                <>
                <div style={{borderRadius:"20px"}}>
                    <div className='d-flex'>
                        <div className=''>{getJobs.logo}</div>
                        <div><div className='fw-500 txt-19 lh-22 txt-f3'>{getJobs.companyName}</div> <div className='fw-400 txt-13 lh-15'>{getJobs.location}</div></div>
                    </div>
                    <div className='fw-500 txt-19 lh-22'>{getJobs.jobTitle}</div>
                    <div className='fw-400 txt-13 lh-15 txt-f3'>{getJobs.JobRequirement}</div>
                    <div><div className='fw-600 txt-19 lh-22'>{getJobs.salary}</div> <div className='fw-400 txt-13 lh-15'>{getJobs.timePosted}</div></div>
                </div>
                </>
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default Companies