import CustomSvg from "../../customSvg/customSvg";
import accessCoursesImage from "../../../assets/images/accessCoursesImage.png";
import './accessCourses.css';

function AccessCourses() {
  return (
    <div className="d-flex flex-column bg-f5 flex-lg-row accessGeneral  align-items-center">
        <div className="">
            <div  style={{maxWidth:"611px", position:"relative"}}><img src={accessCoursesImage} alt="a man reading"  className="manPressingLabtop container"/></div>
            <div className="d-none d-xl-block" style={{position:"absolute",zIndex:""}}>
                <div className="bg-d9 d-flex align-items-center justify-content-between mb-3" style={{padding:"10px", borderRadius:"20px", maxWidth:"455px"}}>
                    <CustomSvg name="expertLedCourses"/>
                    <div className="d-flex justify-content-between align-items-center" style={{width:"360px"}}>
                        <div className="d-flex flex-column" >
                            <div className="txt-ff fw-500 txt-16 lh-19">Expert-led courses</div>
                            <div className="txt-11 txt-ff fw-500 lh-13">Courses Highlights</div>
                        </div>
                        <div className="fw-600 txt-19 lh-22 txt-ff">+200</div>
                    </div>
                </div>
                <div className="bg-eb d-flex align-items-center justify-content-between" style={{padding:"10px", borderRadius:"20px", maxWidth:"390px"}}>
                    <CustomSvg name="satisfactionrate"/>
                    <div className="d-flex justify-content-between align-items-center" style={{width:"320px"}}>
                        <div className="d-flex flex-column" >
                            <div className="txt-ff fw-500 txt-16 lh-19">Satisfaction rate.</div>
                            <div className="txt-11 txt-ff fw-500 lh-13">Courses Highlights</div>
                        </div>
                        <div className="fw-600 txt-19 lh-22 txt-ff">90%</div>
                    </div>
                </div>
            </div>
        </div>
        <div className=""  style={{maxWidth:"576px"}}>
            <p className="txt-f3 fw-500 lh-19 enhance" style={{maxWidth:"370px"}}>2. Enhance Your Skills with Expert-Led Courses</p>
            <p className="fw-500 lh-27 access" style={{maxWidth:"177px"}}>Access Courses</p>
            <p className="fw-400 lh-19 pb-4 unlock" style={{maxWidth:"576px"}}>
                Unlock a world of knowledge with Verion X. Our extensive library of expert-led courses is designed to elevate your skills and accelerate your career growth. Whether you&apos;re looking to master new technologies, refine your existing expertise, or explore new professional fields, our courses provide the tools and insights you need to succeed.
            </p>
            <div className="d-flex align-items-center justify-content-between" style={{width:"189px"}}>
                <button className="bg-eb txt-ff" style={{padding:"11px 18px", borderRadius:"30px"}}>Learn More</button>
                <CustomSvg name="arrowTopRight" className=""/>
            </div>
        </div>
    </div>
  )
}

export default AccessCourses