import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//import { graphql } from 'gatsby';
//import Img from 'gatsby-image';


export default (props) =>{


return(
<NavContaner>
<CssBaseline />
<Container maxWidth="lg">

    <NavLogo>
        <h1>
        كلية علوم ذوي الأحتياجات الخاصة
        </h1>
    </NavLogo>


    <NavLinks>
        <Link  activeStyle={{ color: "red" }}   className='nav-link' to="/">الرئيسيه </Link>
        <Link  activeStyle={{ color: "red" }} className='nav-link' to="/about/">عن الكلية </Link>
        <Link  activeStyle={{ color: "red" }}  className='nav-link' to="/#service">الخدمات</Link>
        <Link  activeStyle={{ color: "red" }}   className='nav-link' to="/article/">ذوي الهمم </Link>
        <Link  activeStyle={{ color: "red" }} className='nav-link' to="/#about">الاطار النظري</Link>
        <Link  activeStyle={{ color: "red" }}  className='nav-link' to="/contact/">تواصل معانا </Link>
    </NavLinks>
  </Container>

</NavContaner>
)
}


const NavContaner = styled.header`
    display: block;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 999;
    padding: 1rem;
}
`


const NavLogo =  styled.div`
    padding: 16px 30px;
    display: block;
    width: 100%;
    h1 {
      font-size: 22px;
      color: white;
    }
`



const NavLinks =  styled.nav`
    display: block;
    width: 100%;
    justify-content: flex-end;
    padding: 0 15px;
    background-color: white;
    border-radius: 50px;
    .nav-link {
          font-size: 22px;
          font-weight: bold;
          color: black;
          text-decoration: none;
          padding: 27px 15px;
          display: inline-block;
          width: auto;
    }
`
