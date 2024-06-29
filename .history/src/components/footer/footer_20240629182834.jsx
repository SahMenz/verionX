import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import CustomSvg from '../customSvg/customSvg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './footer.css';
import Spinner from 'react-bootstrap/Spinner';


function Footer() {

    

    const [isPending, setIsPending] = useState(false);
  const [userInput, setUserInput] = useState('');



    // const notify = () => {toast.success('😎 Congratulations, Email Subscribed', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   // transition: Bounce,
    //   });};

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const sendData = async (data) => {

  setIsPending(true);

  try {
    const response = await fetch('https://verionx-api.onrender.com/api/v1/users/register-mail-to-mail-list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Data sent successfully:', result.message);
      setIsPending(false);
      toast.success(result.message);
      setUserInput('');
    } else {
      console.error('Error sending data:', response.status, result);
      setIsPending(false);
      toast.error(result.error);
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('An unexpected error occurred. Please try again later.');
  }
};

  return (
    <div className='d-flex bg-f5 justify-content-between footerGeneral gap-5' style={{borderRadius:"50px"}}>
        <div className='d-flex flex-column' style={{width:"272px", height:"166px"}}>
            <img  src={logo} style={{width:"97.2px"}}/>
            <div className='fw-400 lh-15 txt-11 py-4'>
                At Verion X, we believe that finding your ideal job should be a 
                seamless and empowering experience. Our platform is dedicated to connecting talented 
                professionals with employers who appreciate and value their unique skills and ambitions
            </div>
            <div className='d-flex align-items-center justify-content-between' style={{width:"110px"}}>
                <button><CustomSvg name="x"/></button>
                <button><CustomSvg name="facebook"/></button>
                <button><CustomSvg name="insta"/></button>
                <button><CustomSvg name="linkedin"/></button>
            </div>
        </div>
        <div className='d-flex flex-column justify-content-between' style={{width:"84px", height:"192px"}}>
            <div className='fw-500 txt-23 lh-32'>Explore</div>
            <a href="#" className='txt-00 fw-400 txt-13 lh-18 text-decoration-none'>About Us</a>
            <a href="#" className='txt-00 fw-400 txt-13 lh-18 text-decoration-none'>Contact Us</a>
            <a href="#" className='txt-00 fw-400 txt-13 lh-18 text-decoration-none'>Find Jobs</a>
            <a href="#" className='txt-00 fw-400 txt-13 lh-18 text-decoration-none'>Courses</a>
        </div>
        <div className='d-flex flex-column justify-content-between' style={{width:"127px", height:"152px"}}>
            <div className='fw-500 txt-23 lh-32'>Quick Links</div>
            <a href="#" className='txt-00 fw-400 txt-13 lh-18 text-decoration-none'>Create Cv</a>
            <a href="#" className='txt-00 fw-400 txt-13 lh-18 text-decoration-none'>Privacy Policy</a>
            <a href="#" className='txt-00 fw-400 txt-13 lh-18 text-decoration-none'>Term Of Use</a>
        </div>
        <div className='d-flex flex-column justify-content-between' style={{height:"107px"}}>
            <div className='fw-500 txt-23 lh-32'>Our Newsletter</div>
            <div>
                <input  type='text' value={userInput} onChange={handleInputChange} placeholder='Email address' style={{marginRight:"20px",borderRadius:"30px", padding:"15px 20px", boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.2)"}}/>
                {!isPending && <button onClick={() => sendData(userInput)} className='bg-f5'><CustomSvg name="telegram"/></button>}
                {isPending && <button disabled className="bg-eb p-3 mb-xl-5 inputButton" style={{borderRadius:"20px" ,boxShadow: "0px -1px 5px 0px rgba(0, 0, 0, 0.2)"}}>
                  <Spinner animation="border" role="status" style={{height:"21px", width:"21px"}}>
                    <span className="visually-hidden">Loading...</span>
                  </Spinner></button>
                }
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Footer