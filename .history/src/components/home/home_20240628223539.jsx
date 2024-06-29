// import Footer from "../footer/footer"
import Navigation from "../navigation/navigation"
import AccessCourses from "./accessCourses/accessCourses"
import Companies from "./companies/companies"
import CreateProfessionalCv from "./createProfessionalCv/createProfessionalCv"
import GetNotified from "./getNotified/getNotified"
import Hero from "./hero/hero"
import StayAhead from "./stayAhead/stayAhead"

function Home() {
  return (
    <div >
        <Navigation />
        <Hero />
        <Companies />
        <AccessCourses />
        <StayAhead />
        <CreateProfessionalCv />
        <GetNotified />
    </div>
  )
}

export default Home