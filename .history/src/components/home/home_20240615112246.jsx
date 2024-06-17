import Navigation from "../navigation/navigation"
import GetJobOffer from "./getJobOffer/getJobOffer"
import Hero from "./hero/hero"

function Home() {
  return (
    <div >
        <Navigation />
        <Hero />
        <GetJobOffer />
    </div>
  )
}

export default Home