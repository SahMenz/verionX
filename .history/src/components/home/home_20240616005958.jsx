import Navigation from "../navigation/navigation"
import AccessCourses from "./accessCourses/accessCourses"
import Hero from "./hero/hero"

function Home() {
  return (
    <div >
        <Navigation />
        <Hero />
        <AccessCourses />
        <CreateProfessionalCv />
    </div>
  )
}

export default Home