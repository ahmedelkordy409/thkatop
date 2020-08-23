/*import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
//import { graphql } from 'gatsby';
//import Img from 'gatsby-image';


export default (props) =>{

  const [navBackground, setNavBackground] = React.useState(false)
   const navRef = React.useRef()
   navRef.current = navBackground
   React.useEffect(() => {
     const handleScroll = () => {
       const show = window.scrollY > 10
       console.log(show,`when show +++ ${navBackground}`)

       if (navRef.current !== show) {
         setNavBackground(show)

         console.log(show,`when show +++++++++ ${navBackground}`)

       }
     }
       document.addEventListener('scroll', handleScroll)
     return () => {
       document.removeEventListener('scroll', handleScroll)
     }
   }, [navBackground])


return(
<NavContaner isScroll={navBackground}>

    <NavLogo isScroll={navBackground}>
        <img  src="/logo.png" alt="hi my nane is ahmed elkordy" />
    </NavLogo>

    <NavLinks isScroll={navBackground}>
        <Link  activeStyle={{ color: "red" }}   className='nav-link' to="/">الرئيسيه </Link>
        <Link  activeStyle={{ color: "red" }} className='nav-link' to="/about/">عن الكلية </Link>
        <Link  activeStyle={{ color: "red" }}  className='nav-link' to="/contact/">الخدمات</Link>
        <Link  activeStyle={{ color: "red" }}   className='nav-link' to="/article/">ذوي الهمم </Link>
        <Link  activeStyle={{ color: "red" }} className='nav-link' to="/videos/">الاطار النظري</Link>
        <Link  activeStyle={{ color: "red" }}  className='nav-link' to="/contact/">تواصل معانا </Link>
    </NavLinks>


</NavContaner>
)
}


const NavContaner = styled.header`
    display: flex;
    position: fixed;
    top: ${(props) => props.isScroll ? '0': '20px'};
    left: 0;
    width: 100%;
    z-index: 999;
    background: ${(props) => props.isScroll ? '#ffffffd6;': 'transparent'};
    box-shadow: ${(props) => props.isScroll ? '-1px 4px 9px 2px #4d505040': '0'};
    backdrop-filter:${(props) => props.isScroll ? 'blur(4px)': '0'} ;
`


const NavLogo =  styled.div`
    margin: 8px 39px;
    display: inline-flex;
    width: 23%;
    img {
      height: ${(props) => props.isScroll ? '60px': '75px'};
      transition: 0.5s;

    }
`



const NavLinks =  styled.nav`
    display: inline-flex;
    width: 100%;
    justify-content: flex-end;
    padding: 0 0 0 30px;
    .nav-link {
          font-size: 16px;
          font-weight: bold;
          color: ${(props) => props.isScroll ? 'black': 'white'} ;
          text-decoration: none;
          padding: ${(props) => props.isScroll ? '27px 2%': '34px 2%'};
          display: inline-flex;
          width: auto;
    }
`*/
