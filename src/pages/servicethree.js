import React from "react"
import Header from "../components/header"
import OldNavBar from "../components/oldnavbar"
import Contaner from "../components/contaner"
import SEO from "../components/seo"

import Container from '@material-ui/core/Container';

//import styled from "styled-components"






export default () => {

return(
  <Contaner>
     <SEO
       lang="ar"
       title="ahmed elkordy"
       description="dev by ahmed elkordy"
       meta="xxx xxx xxx xxx"
      />

     <OldNavBar/>

     <Header
       bgimage="/img_3.jpg"
       tittle=""
       subtittle=""
     />

     <Container fixed style={{padding: "60px 43px"}}>
      <h1>

      </h1>









     </Container>


  </Contaner>
)
}


/*

const STittle = styled.h1`
    color: #F44336;
`
*/
