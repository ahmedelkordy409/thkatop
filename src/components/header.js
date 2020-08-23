import React from "react"
import styled from "styled-components";
//import { graphql } from 'gatsby';
//import Img from 'gatsby-image';


export default (props) =>(

<Layout>
  <Parallax background={props.bgimage}/>

  <MetaContaner>
      <Title>
          {props.bgimage}
      </Title>
      <Description>
      {props.bgimage}
      </Description>

  </MetaContaner>



</Layout>

)





const Layout = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
`


const MetaContaner = styled.div`
    z-index: 10;
    right: 50px;
    top: 41vh;
    position: absolute;
    width: 46%;
`



const Parallax = styled.div`
    width: 100%;
      /* The image used */
    transform: scaleX(-1);

    background-image: url(${(props) => props.background});
    /* Set a specific height */
    height: 100vh;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% -25px;
    z-index: 2;
    position: relative;

      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }

`


const Title = styled.h1`

        text-shadow: -1px 0px 0 #212120;
        color: #FF5722;
        font-weight: bold;
        font-size: 37px;


`


const Description = styled.p`
    color: #1d1d1d;
    font-size: 22px;
`
