import React from "react"
import LayOut from "../components/layout"
import TeamSection from "../components/teamsection"
import ServiceSection from "../components/servicesection"
import AboutUsSection from "../components/aboutussection"
import SEO from "../components/seo"





export default () => {

return(
     <LayOut
      background="/img_3.jpg"
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
