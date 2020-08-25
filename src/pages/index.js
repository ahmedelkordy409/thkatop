import React from "react"
import Contaner from "../components/contaner"
import LayOut from "../components/layout"
import TeamSection from "../components/teamsection"
import ServiceSection from "../components/servicesection"
import AboutUsSection from "../components/aboutussection"
import SEO from "../components/seo"





export default () => {

return(
     <LayOut
      background=""
     >
     <SEO
       lang="ar"
       title="ahmed elkordy"
       description="dev by ahmed elkordy"
       meta="xxx xxx xxx xxx"
       />


     <ServiceSection/>
     <AboutUsSection />
     <TeamSection />



     </LayOut>
)
}
