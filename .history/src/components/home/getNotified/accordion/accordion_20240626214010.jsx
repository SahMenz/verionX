import CustomSvg from '../../../customSvg/customSvg'

function Accordion() {

  const  [accordionOpen, setAccordionOpen] = (true);

  return (
        <button className={`bg-ec flex-column align-items-center justify-content-between ${accordionOpen ? "d-flex" : ""}`} onClick={() => setAccordionOpen(!accordionOpen)} style={{borderRadius:"20px",width:"90vw", maxWidth:"663px"}}>
            <div className='d-flex align-items-center justify-content-between' style={{padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                <div className='fw-400 textAdjust text-start lh-34' style={{width:"70vw"}}>What is Verion X?</div>
                {accordionOpen ? <div><CustomSvg name="plus" /></div> : <div><CustomSvg name="minus" /></div>}
            </div>
            <div className={`fw-400 txt-16 lh-26 accordionDesc ${accordionOpen ? "d-none" : "d-flex"}`} style={{borderRadius:"20px", padding:"20px 29px 20px 18px", width:"90vw", maxWidth:"663px"}}>
                Verion X is a comprehensive career development platform designed to help you achieve your professional goals. We connect job seekers with 
                top employers, offer a wide range of skill-enhancing courses, and 
                provide professional CV templates to help you stand out in the 
                job market.
            </div>
        </button>
  )
}

export default Accordion