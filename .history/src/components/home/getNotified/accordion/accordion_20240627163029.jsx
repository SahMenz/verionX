import { useState } from 'react';
import CustomSvg from '../../../customSvg/customSvg';
import Fade from 'react-bootstrap/Fade';


function Accordion({title, accordionDescription}) {

    const [open, setOpen] = useState(false);

  return (
        <div onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className="bg-ec flex-column align-items-center justify-content-between " style={{borderRadius:"20px",width:"90vw", maxWidth:"663px"}}>
            <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>{title}</div>
                <div><CustomSvg name="minus" /></div>
            </div>
            <Fade  in={open}>
                <div id="example-fade-text" className='fw-400 txt-16 lh-26 accordionDesc' style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                    {accordionDescription}
                </div>
            </Fade>
        </div>
        // <button className={`bg-ec flex-column align-items-center justify-content-between ${accordionOpen ? "d-flex" : ""}`} onClick={() => setAccordionOpen(!accordionOpen)} style={{borderRadius:"20px",width:"90vw", maxWidth:"663px"}}>
        //     <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
        //         <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>{title}</div>
        //         {accordionOpen ? <div><CustomSvg name="plus" /></div> : <div><CustomSvg name="minus" /></div>}
        //     </div>
        //     <div className={`fw-400 txt-16 lh-26 accordionDesc ${accordionOpen ? "d-none" : "d-flex"}`} style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
        //         {accordionDescription}
        //     </div>
        // </button>
  )
}

export default Accordion