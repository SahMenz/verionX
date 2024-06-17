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
                        <div>{getJobs.logo}</div>
                        <div><div>{getJobs.companyName}</div> <div>{getJobs.location}</div></div>
                    </div>
                    <div>{getJobs.jobTitle}</div>
                    <div>{getJobs.JobRequirement}</div>
                    <div><div>{getJobs.salary}</div> <div>{getJobs.timePosted}</div></div>
                </div>
                </>
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default Companies