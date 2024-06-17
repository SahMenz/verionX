import Footer from "../footer/footer"
import Navigation from "../navigation/navigation"
import AccessCourses from "./accessCourses/accessCourses"
import CreateProfessionalCv from "./createProfessionalCv/createProfessionalCv"
import GetNotified from "./getNotified/getNotified"
import Hero from "./hero/hero"
import StayAhead from "./stayAhead/stayAhead"

function Home() {
  return (
    <div >
        <Navigation />
        <Hero />
        <AccessCourses />
        <StayAhead />
        <CreateProfessionalCv />
        <GetNotified />
        <Footer />
    </div>
  )
}

export default Home