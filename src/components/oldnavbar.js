import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';

export default (props) =>{


return(
<NavContaner>
<CssBaseline />
<Container maxWidth="lg">

    <NavLogo>
        <h1>
           انت تقدر
        </h1>
    </NavLogo>


    <NavLinks>
        <Link  activeStyle={{ color: "red" }}   className='nav-link' to="/">الرئيسية  </Link>
        <Link  activeStyle={{ color: "red" }} className='nav-link' to="/about/">عن الكلية </Link>
        <Link  activeStyle={{ color: "red" }}  className='nav-link' to="/#service">الخدمات</Link>
        <Link  activeStyle={{ color: "red" }}   className='nav-link' to="/article/">ذوي الهمم </Link>
        <Link  activeStyle={{ color: "red" }} className='nav-link' to="/#about"> فكرة الموقع </Link>
        <Link  activeStyle={{ color: "red" }}  className='nav-link' to="/contact/"> تواصل معنا </Link>


        <YouTubeIcon
        style={{
                     margin: "9px 20px",
                     color: " #ff1100",
                     fontSize: "2rem",
                     height: "2em",
                     float: "left"

              }}
        />

        <TwitterIcon
        style={{
                     margin: "9px 20px",
                     color: "#03A9F4",
                     fontSize: "2rem",
                     height: "2em",
                     float: "left",
              }}
        />


        <RedditIcon
        style={{
                     margin: "9px 20px",
                     color: " #FF5722",
                     fontSize: "2rem",
                     height: "2em",
                     float: "left"

              }}
         />


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
    padding: 16px 22px;
    display: block;
    width: 100%;
    h1 {
      font-size: 22px;
      color: white;

    }
`





const NavLinks = styled.nav`

  display: block;
  width: 100%;
  justify-content: flex-end;
  padding: 0 15px;
  background-color: white;
  border-radius: 50px;

`;
