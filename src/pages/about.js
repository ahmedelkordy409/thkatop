import React from "react"
import Header from "../components/header"
import NavBar from "../components/navbar"
import Contaner from "../components/contaner"
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
     <Header bgimage="/img_1.jpg" />


     <div style={{height: `100vh`}}>
     <h1 style={{color: `green`}} id="one"> about </h1>
     </div>



  </Contaner>
)
}
