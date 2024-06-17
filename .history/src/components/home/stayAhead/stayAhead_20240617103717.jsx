import groupImage from '../../../assets/images/groupImage.png';
import './stayAhead.css';

function StayAhead() {
  return (
    <div className='generalStay'>
        <div className='textStay fw-500' style={{maxWidth:"875px"}}>Stay <span className='txt-eb'>Ahead</span> of Opportunities with Unmatched <span className='txt-eb'>Access</span></div>
        <div className='text-center mt-5'>
            <img src={groupImage} className='groupPhotos' alt="" />
        </div>
    </div>
  )
}

export default StayAhead