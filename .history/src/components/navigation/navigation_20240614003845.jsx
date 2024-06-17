import logo from '../../assets/images/logo.svg'
import CustomSvg from '../customSvg/customSvg'
import './navigation.css'

function Navigation() {
  return (
    <div className="d-flex justify-content-between navContainer">
        <img src={logo} alt="" />
        <div className='d-flex navigationLink justify-content-between align-items-center'>
          <div className='d-flex justify-content-between align-items-center links bg-f3'>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Home</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Find job</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Courses</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Cvs</a>
          </div>
          <div className='d-flex justify-content-between align-items-center switchmode'>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Sign up</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-ff bg-eb px-4 py-2 rounded-5'>Login</a>
            <CustomSvg name="switchModes"/>
          </div>
        </div>
    </div>
  )
}

export default Navigation