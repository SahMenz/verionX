import { useState } from 'react';
import CustomSvg from '../../../customSvg/customSvg'

function Accordion({title, accordionDescription}) {

  const  [accordionOpen, setAccordionOpen] = useState(true);

  return (
        <button className={`bg-ec flex-column align-items-center justify-content-between ${accordionOpen ? "d-flex" : ""}`} onClick={() => setAccordionOpen(!accordionOpen)} style={{borderRadius:"20px",width:"90vw", maxWidth:"663px"}}>
            <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>{title}</div>
                {accordionOpen ? <div><CustomSvg name="plus" /></div> : <div><CustomSvg name="minus" /></div>}
            </div>
            {/* <div className={`fw-400 txt-16 lh-26 accordionDesc ${accordionOpen ? "d-nones" : "d-flex"}`} style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}> */}
            {/* <div className="fw-400 txt-16 lh-26 accordionDesc" style={{`${accordionOpen ? "borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"   " : "d-flex"}`}}> */}
                {accordionDescription}
            </div>
        </button>
  )
}

export default Accordion