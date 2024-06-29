import { useState } from 'react';
import './getNotified.css';
import Footer from '../../footer/footer'
// import Fade from 'react-bootstrap/Fade';
import Collapse from 'react-bootstrap/Collapse';
import CustomSvg from '../../customSvg/customSvg';
// import { Accordion } from 'react-bootstrap';


function GetNotified() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

  return (
    <>
        <div className='d-flex mb-5 align-items-center flex-column getContainer'>
            <div className="bg-eb d-flex flex-column justify-content-between getGeneral text-center">
                <div className="fw-500 txt-ff xl-lh-54 getNotified text-center">Stay Ahead with Verion X Updates</div>
                <div action="" className='d-flex bg-ff mt-lg-5 mt-4 getSubscriber' style={{borderRadius:"30px",padding:"9px 9px 9px 30px"}}>
                <input type="text" placeholder="Your email address" className='inputText' style={{width:"50vw", maxWidth:"455px", }}/>
                <button className='bg-eb txt-ff d-none d-md-block lh-22 fw-400 txt-19 getSubscriberButton' style={{padding:"12px 40px", borderRadius:"20px"}}>Get Update</button>
                <div className="d-block d-md-none">
                    <CustomSvg  name="telegram"/>
                </div>
                </div>
            </div>


            <div>
                <div className='text-center txt-eb fw-500 lh-34 textFaq mb-2 mt-5'>FAQs</div>
                <div className='text-center fw-500 lh-64 textFre mb-5'>Frequently Asked Questions</div>

                <div  className='d-flex flex-wrap gap-xl-4 px-xl-2 justify-content-center' style={{maxWidth:"1390px", gap:"30px"}}>
                    <div className='d-flex flex-wrap gap-2  gap-xl-3 px-xl-2 justify-content-center' style={{width:"90vw", maxWidth:"663px", maxHeight:"263px", marginBottom:open || open1 || open2 ? "130px" : ""}}>
                        <div  onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}  className='bg-ec flex-column d-flex align-items-center justify-content-between' style={{cursor:"pointer",borderRadius:"20px",height: open ? "" : "90px", width:"90vw", maxWidth:"663px"}}>
                            <div>
                                <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What is Verion X?</div>
                                    {open ? <div><CustomSvg name="minus" /></div> : <div><CustomSvg name="plus" /></div>}
                                </div>
                            </div>
                            <Collapse in={open}>
                                <div id="example-fade-text">
                                <div className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                                    top employers, offer a wide range of skill-enhancing courses, and 
                                    provide professional CV templates to help you stand out in the 
                                    job market.
                                </div>
                                </div>
                            </Collapse>
                        </div>


                        <div  onClick={() => setOpen1(!open1)} aria-controls="example-fade-text" aria-expanded={open1}  className='bg-ec flex-column d-flex align-items-center justify-content-between' style={{cursor:"pointer",borderRadius:"20px",height: open1 ? "" : "90px", width:"90vw", maxWidth:"663px"}}>
                            <div>
                                <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What are the courses available on Verion X?</div>
                                    {open1 ? <div><CustomSvg name="minus" /></div> : <div><CustomSvg name="plus" /></div>}
                                </div>
                            </div>
                            <Collapse in={open1}>
                                <div id="example-fade-text">
                                <div className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                                    top employers, offer a wide range of skill-enhancing courses, and 
                                    provide professional CV templates to help you stand out in the 
                                    job market.
                                </div>
                                </div>
                            </Collapse>
                        </div>


                        <div  onClick={() => setOpen2(!open2)} aria-controls="example-fade-text" aria-expanded={open2}  className='bg-ec flex-column d-flex align-items-center justify-content-between' style={{cursor:"pointer",borderRadius:"20px",height: open2 ? "" : "90px", width:"90vw", maxWidth:"663px"}}>
                            <div>
                                <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>How do I create a profile on Verion X?</div>
                                    {open2 ? <div><CustomSvg name="minus" /></div> : <div><CustomSvg name="plus" /></div>}
                                </div>
                            </div>
                            <Collapse in={open2}>
                                <div id="example-fade-text">
                                <div className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                                    top employers, offer a wide range of skill-enhancing courses, and 
                                    provide professional CV templates to help you stand out in the 
                                    job market.
                                </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>

                    <div className='d-flex flex-wrap gap-2 gap-xl-3 px-xl-2 justify-content-center' style={{width:"90vw", maxWidth:"663px", maxHeight:"263px", marginBottom: open3 || open4 || open5 ? "130px" : "", marginTop:open || open1 || open2 ? "100px" : ""}}>
                        <div  onClick={() => setOpen3(!open3)} aria-controls="example-fade-text" aria-expanded={open3}  className='bg-ec flex-column d-flex align-items-center justify-content-between' style={{cursor:"pointer",borderRadius:"20px",height: open3 ? "" : "90px", width:"90vw", maxWidth:"663px"}}>
                            <div>
                                <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>Is there any cost to use Verion X?</div>
                                    {open3 ? <div><CustomSvg name="minus" /></div> : <div><CustomSvg name="plus" /></div>}
                                </div>
                            </div>
                            <Collapse in={open3}>
                                <div id="example-fade-text">
                                <div className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                                    top employers, offer a wide range of skill-enhancing courses, and 
                                    provide professional CV templates to help you stand out in the 
                                    job market.
                                </div>
                                </div>
                            </Collapse>
                        </div>


                        <div  onClick={() => setOpen4(!open4)} aria-controls="example-fade-text" aria-expanded={open4}  className='bg-ec flex-column d-flex align-items-center justify-content-between' style={{cursor:"pointer",borderRadius:"20px",height: open4 ? "" : "90px", width:"90vw", maxWidth:"663px"}}>
                            <div>
                                <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>How does the job matching algorithm work?</div>
                                    {open4 ? <div><CustomSvg name="minus" /></div> : <div><CustomSvg name="plus" /></div>}
                                </div>
                            </div>
                            <Collapse in={open4}>
                                <div id="example-fade-text">
                                <div className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                                    top employers, offer a wide range of skill-enhancing courses, and 
                                    provide professional CV templates to help you stand out in the 
                                    job market.
                                </div>
                                </div>
                            </Collapse>
                        </div>


                        <div  onClick={() => setOpen5(!open5)} aria-controls="example-fade-text" aria-expanded={open5}  className='bg-ec flex-column d-flex align-items-center justify-content-between' style={{cursor:"pointer",borderRadius:"20px",height: open5 ? "" : "90px", width:"90vw", maxWidth:"663px"}}>
                            <div>
                                <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What are the job opportunities on Varion X?</div>
                                    {open5 ? <div><CustomSvg name="minus" /></div> : <div><CustomSvg name="plus" /></div>}
                                </div>
                            </div>
                            <Collapse in={open5}>
                                <div id="example-fade-text">
                                <div className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                                    Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                                    top employers, offer a wide range of skill-enhancing courses, and 
                                    provide professional CV templates to help you stand out in the 
                                    job market.
                                </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div style={{marginTop:open || open1 || open2 || open3 || open4 || open5 ? "190px" : ""}}>
            <Footer />
        </div>
    </>
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