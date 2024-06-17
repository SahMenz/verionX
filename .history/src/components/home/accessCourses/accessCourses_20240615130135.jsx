import CustomSvg from "../../customSvg/customSvg"
import accessCoursesImage from "../../../assets/images/accessCoursesImage.png"

function AccessCourses() {
  return (
    <div className="d-flex flex-column">
        <div><img src={accessCoursesImage} alt="" /></div>
        <div>
            <p className="txt-f3 fw-500 txt-16 lh-19">2. Enhance Your Skills with Expert-Led Courses</p>
            <p className="fw-500 txt-23 lh-27 py-3">Access Courses</p>
            <p className="fw-400 lh-19 txt-16 pb-4" style={{}}>
                Unlock a world of knowledge with Verion X. Our extensive library of expert-led courses is designed to elevate your skills and accelerate your career growth. Whether you&apos;re looking to master new technologies, refine your existing expertise, or explore new professional fields, our courses provide the tools and insights you need to succeed.
            </p>
            <div className="d-flex align-items-center justify-content-between" style={{width:"189px"}}>
                <button className="bg-eb txt-ff" style={{padding:"11px 18px", borderRadius:"30px" }}>Learn More</button>
                <CustomSvg name="arrowTopRight" />
            </div>
        </div>
    </div>
  )
}

export default AccessCourses