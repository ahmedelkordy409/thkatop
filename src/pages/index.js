import React from "react"
import Header from "../components/header"
import NavBar from "../components/navbar"
import Contaner from "../components/contaner"
import HomeNav from "../components/homenav"
import TeamSection from "../components/teamsection"
import SEO from "../components/seo"





export default () => {

return(
  <Contaner>
     <SEO
       lang="ar"
       title="ahmed elkordy"
       description="dev by ahmed elkordy"
       meta="xxx xxx xxx xxx"
       />

     <NavBar/>

     <Header bgimage="/img_5.jpg" />

     <HomeNav>


     </HomeNav>




          <div style={{height: `100vh`}}>
          <h1 style={{color: `green`}} id="one"> home </h1>
          </div>


     <TeamSection />








  </Contaner>
)
}
