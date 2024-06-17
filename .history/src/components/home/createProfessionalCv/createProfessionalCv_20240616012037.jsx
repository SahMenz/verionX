import createProfessionalImage from '../../../assets/images/createProfessionalImage.png';
import CustomSvg from '../../customSvg/customSvg';
import './createProfessionalCv.css';

function CreateProfessionalCv() {
  return (
    <div className='d-flex flex-column bg-f5 flex-xl-row align-items-center'>
        <div>
            <div className='fw-500 lh-19 txt-16' style={{margin:"0px 0px 8px 0px"}}>3. Make an impression on potential employers.</div>
            <div className='fw-500 lh-27 txt-23' style={{margin:"0px 0px 20px 0px"}}>Create Professional CVs</div>
            <div className='fw-400 txt-19 lh-23' style={{margin:"0px 0px 80px 0px"}}>Elevate your job applications with a standout CV using professional customizable templates.</div>
            <div className='fw-400 txt-16 lh-19' style={{margin:"0px 0px 29px 7px"}}><CustomSvg name="createProfessionalTick"/> Professional, customizable templates</div>
            <div className='fw-400 txt-16 lh-19' style={{margin:"0px 0px 29px 7px"}}><CustomSvg name="createProfessionalTick"/> Easy-to-use tools for a polished, professional look</div>
            <div className='fw-400 txt-16 lh-19' style={{margin:"0px 0px 29px 7px"}}><CustomSvg name="createProfessionalTick"/> Highlight your skills, experiences, and achievements</div>
            <div className="d-flex align-items-center justify-content-between" style={{width:"189px"}}>
                <button className="bg-eb txt-ff" style={{padding:"11px 18px", borderRadius:"30px"}}>Get Started</button>
                <CustomSvg name="arrowTopRight" className=""/>
            </div>
        </div>
        <img src={createProfessionalImage} style={{}}/>
    </div>
  )
}

export default CreateProfessionalCv