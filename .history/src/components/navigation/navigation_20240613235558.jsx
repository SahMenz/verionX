import logo from '../../assets/images/logo.svg'
import CustomSvg from '../customSvg/customSvg'

function Navigation() {
  return (
    <div className="d-flex">
        <img src={logo} alt="" />
        <div>
          <div className='d-flex'>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Home</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Find job</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Courses</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Cvs</a>
          </div>
          <div className='d-flex'>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Sign up</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-ff bg-eb px-4 py-2 rounded-5'>Login</a>
            <CustomSvg name="switchModes"/>
          </div>
        </div>
    </div>
  )
}

export default Navigation