import { useState } from 'react';
import './getNotified.css';
// import Fade from 'react-bootstrap/Fade';
// import CustomSvg from '../../customSvg/customSvg';
import { Accordion } from 'react-bootstrap';


function GetNotified() {

    const [open, setOpen] = useState(false);

  return (
    <div className='d-flex align-items-center flex-column getContainer'>
        <div className="bg-eb d-flex flex-column justify-content-between getGeneral text-center">
            <div className="fw-500 txt-ff xl-lh-54 getNotified text-center">Stay Ahead with Verion X Updates</div>
            <form action="" className='d-flex'>
              <input type="text" placeholder="Your email address" className='inputText mt-lg-5 mt-4' style={{position:"relative",borderRadius:"30px", padding:"20px 0px 20px 30px", maxWidth:"652px"}}/>
              <button className='bg-eb txt-ff lh-22 fw-400 txt-19' style={{position:"absolute", padding:"12px 40px", borderRadius:"20px"}}>Get Update</button>
            </form>
        </div>
        <div>
            <div className='text-center txt-eb fw-500 lh-34 textFaq mb-2 mt-5'>FAQs</div>
            <div className='text-center fw-500 lh-64 textFre mb-5'>Frequently Asked Questions</div>
            <div className='d-flex flex-wrap flex-column gap-3  gap-xl-4 px-xl-2 justify-content-center' style={{maxWidth:"1390px"}}>
                <Accordion />
            </div>
        </div>
    </div>
  )
}

export default GetNotified


// {
//   accordionOpen ? 
//   <button className='bg-ec flex-column d-flex transitions align-items-center justify-content-between' onClick={toggleAccordion} style={{borderRadius:"20px",width:"90vw", maxWidth:"663px"}}>
//     <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
//         <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What is Verion X?</div>
//         <div><CustomSvg name="minus" /></div>
//     </div>
//     <div className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
//         Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
//         top employers, offer a wide range of skill-enhancing courses, and 
//         provide professional CV templates to help you stand out in the 
//         job market.
//     </div>
//   </button>

//   :

//   <button className='transitions bg-ec d-flex align-items-center justify-content-between' onClick={toggleAccordion} style={{borderRadius:"20px",width:"90vw", maxWidth:"663px"}}>
//     <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
//         <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What is Verion X?</div>
//         <div><CustomSvg name="plus" /></div>
//     </div>
//   </button>
// }

{/* <Accordion 
                    title="What is Verion X?" 
                    accordionDescription="
                        Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                        top employers, offer a wide range of skill-enhancing courses, and 
                        provide professional CV templates to help you stand out in the 
                        job market."
                /> */}

                {/* <Accordion 
                    title="What are the job opportunities on Verion X?" 
                    accordionDescription="
                        Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                        top employers, offer a wide range of skill-enhancing courses, and 
                        provide professional CV templates to help you stand out in the 
                        job market."
                /> 

                <Accordion 
                    title="How does the job matching algorithm work?" 
                    accordionDescription="
                        Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                        top employers, offer a wide range of skill-enhancing courses, and 
                        provide professional CV templates to help you stand out in the 
                        job market."
                /> 

                <Accordion 
                    title="How do I create a profile on Verion X?" 
                    accordionDescription="
                        Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                        top employers, offer a wide range of skill-enhancing courses, and 
                        provide professional CV templates to help you stand out in the 
                        job market."
                /> 

                <Accordion 
                    title="Is there any cost to use Verion X?" 
                    accordionDescription="
                        Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                        top employers, offer a wide range of skill-enhancing courses, and 
                        provide professional CV templates to help you stand out in the 
                        job market."
                /> 

                <Accordion 
                    title="What are the courses available on Verion X?" 
                    accordionDescription="
                        Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                        top employers, offer a wide range of skill-enhancing courses, and 
                        provide professional CV templates to help you stand out in the 
                        job market."
                />     */}