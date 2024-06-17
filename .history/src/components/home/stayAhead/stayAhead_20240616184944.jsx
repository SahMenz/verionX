import groupImage from '../../../assets/images/groupImage.png';
import './stayAhead.css';

function StayAhead() {
  return (
    <div>
        <div>Stay <span className='txt-eb'>Ahead</span> of Opportunities with Unmatched <span className='txt-eb'>Access</span></div>
        <div className='text-center'>
            <img src={groupImage} className='groupPhotos' alt="" />
        </div>
    </div>
  )
}

export default StayAhead