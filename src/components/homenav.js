import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
//import { graphql } from 'gatsby';
//import Img from 'gatsby-image';

export default () => (
  <NavSection>
    <NavLayout>
       <NavItem bgColor="#FF5722" icon="/icon/1.svg" title="التعزيز والترفيه"  />
       <NavItem bgColor="#F44336" icon="/icon/4.svg" title="المقاييس"  />
       <NavItem bgColor="#E91E63" icon="/icon/6.svg" title="الأهداف"  />
       <NavItem bgColor="#FF9800" icon="/icon/2.svg" title="المقالات"  />
    </NavLayout>
  </NavSection>
)

const NavItem = props => {
  const {bgColor, icon, title } = props

  return (
    <NavItemLink background={bgColor}>
      <ItemIcon src={icon} alt="ahmed elkordy"/>

      <ItemTitle>{title}</ItemTitle>
    </NavItemLink>
  )
}




const NavItemLink = styled.div`
display: block;
width: 25%;
justify-content: center;
background-color: ${(props) => props.background };

&:hover{
      box-shadow: 0 0 7px 3px #00000052;
}
`





const NavSection = styled.section`
  position: relative;
`

const NavLayout = styled.div`
        background-color: #FF9800;
        width: 55%;
        justify-content: center;
        position: absolute;
        top: -51px;
        z-index: 5;
        border-radius: 9px;
        right: 22%;
        display: flex;

`

const ItemIcon = styled.img`
display: block;
width: 78%;
height: 50px;
padding: 15px;
filter: contrast(0.5);
`

const ItemTitle = styled.h5`
color: white;
display: block;
text-align: center;
margin: 0 12px 18px;
`
