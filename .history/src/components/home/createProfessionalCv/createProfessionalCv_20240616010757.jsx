import createProfessionalImage from '../../../assets/images/createProfessionalImage.png'
import CustomSvg from '../../customSvg/customSvg'

function CreateProfessionalCv() {
  return (
    <div>
        <div>
            <div></div>
            <div></div>
            <div>Create Professional CVs</div>
            <div>Elevate your job applications with a standout CV using professional customizable templates.</div>
            <div>Professional, customizable templates</div>
            <div>Easy-to-use tools for a polished, professional look</div>
            <div>Highlight your skills, experiences, and achievements</div>
            <div className="d-flex align-items-center justify-content-between" style={{width:"189px"}}>
                <button className="bg-eb txt-ff" style={{padding:"11px 18px", borderRadius:"30px"}}>Get Started</button>
                <CustomSvg name="arrowTopRight" className=""/>
            </div>
        </div>
        <img src={createProfessionalImage}/>
    </div>
  )
}

export default CreateProfessionalCv