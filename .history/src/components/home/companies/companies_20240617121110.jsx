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
                    <div>
                        {getJobs.logo}
                        <div>{getJobs.companyName} {getJobs.location}</div>
                    </div>
                    <div>{getJobs.jobTitle}</div>
                    <div>{getJobs.JobRequirement}</div>
                    <div>{getJobs.salary} {getJobs.timePosted}</div>
                </div>
                </>
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default Companies