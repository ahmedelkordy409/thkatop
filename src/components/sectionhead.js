import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';


export default (props) => {

 const {name,description}= props;

  return (
    <div
      style={{ height: `auto`,  padding: "50px" }}
    >


<Tittle>
{name}
</Tittle>


<Description>
{description}
</Description>





    </div>
  )
}






const Tittle = styled.h1`
display: block;
width: 100%;
color: white;
text-align: center;
padding: 10px;
`

const Description = styled.p`
padding: 0px 0 49px;
font-size: 17px;
`
