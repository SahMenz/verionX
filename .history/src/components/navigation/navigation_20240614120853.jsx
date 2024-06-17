import { useState } from 'react';
import logo from '../../assets/images/logo.svg'
import CustomSvg from '../customSvg/customSvg'
import './navigation.css'
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navigation() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleopen = () => setShow(true);

  return (
    <div className="d-flex justify-content-between navContainer">
        <img src={logo} alt="" />
        <div className='d-flex navigationLink justify-content-between align-items-center'>
          <div className='d-flex justify-content-between align-items-center links'>
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
        <div>
          <div style={{width : "20px", height:"3px", backgroundColor : '#130828' }}></div>
        </div>
    </div>
  )
}

export default Navigation