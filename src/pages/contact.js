import React from "react"
import Header from "../components/header"
import OldNavBar from "../components/oldnavbar"
import Contaner from "../components/contaner"
import SEO from "../components/seo"
import LayOut from "../components/layout"




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






     <h1 style={{color: `green`}} id="one"> about </h1>
  </LayOut>
)
}
