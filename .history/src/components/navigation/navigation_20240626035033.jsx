import logo from '../../assets/images/logo.svg'
import CustomSvg from '../customSvg/customSvg'
import './navigation.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Navigation() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-between navContainer">
        <img src={logo} alt="" />
        <div className='d-none d-lg-flex navigationLink justify-content-between align-items-center'>
          <div className='d-flex justify-content-between align-items-center links'>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Home</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Find job</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Courses</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Cvs</a>
          </div>
          <div className='d-flex justify-content-between align-items-center switchmode'>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Sign up</a>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-ff bg-eb px-4 py-2 rounded-5'>Login</a>
            <button className='bg-ff'><CustomSvg name="switchModes"/></button>
          </div>
        </div>
        <div onClick={handleShow} className=' d-lg-none' style={{cursor:"pointer",width: "40px", height: "40px", display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", gap: "5px"}}>
          <div style={{width : "30px", height:"3px", backgroundColor : 'black' }}></div>
          <div style={{width : "30px", height:"3px", backgroundColor : 'black' }}></div>
          <div style={{width : "30px", height:"3px", backgroundColor : 'black' }}></div>
        </div>
    </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className='d-flex flex-column d-lg-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-between align-items-center' style={{height:"200px"}}>
              <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Home</a>
              <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Find job</a>
              <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Courses</a>
              <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Cvs</a>
            </div>
            <div className='d-flex flex-column justify-content-between align-items-center switchmode' style={{height:"150px"}}>
              <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-f3'>Sign up</a>
              <a href="#" className='small-txt lh-19 fw-600 text-decoration-none txt-ff bg-eb px-4 py-2 rounded-5'>Login</a>
              <button className='bg-ff'><CustomSvg name="switchModes"/></button>
            </div>
          </div>
          </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Navigation