import Footer from "../footer/footer"
import Navigation from "../navigation/navigation"
import AccessCourses from "./accessCourses/accessCourses"
import CreateProfessionalCv from "./createProfessionalCv/createProfessionalCv"
import Hero from "./hero/hero"

function Home() {
  return (
    <div >
        <Navigation />
        <Hero />
        <AccessCourses />
        <CreateProfessionalCv />
        <Footer />
    </div>
  )
}

export default Home