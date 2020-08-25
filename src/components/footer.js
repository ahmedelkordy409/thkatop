import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";


export default (props) =>(
<CopyRight>
    Copyright ©{new Date().getFullYear()} All rights reserved | This Project is made with <HeartIcon/> by<Link> CS_TEAM </Link>
</CopyRight>
)


const CopyRight =  styled.p`
display: block;
text-align: center;
padding: 10px;
margin-top: 99px;
font-size: 16px;
    color: #000000bf;
a{
    color: #F44336;
    text-decoration: blink;
    font-weight: 700;
}
`
const HeartIcon = styled.span`
color: red;

font-family: 'icomoon' !important;
speak: none;
font-style: normal;
font-weight:  ;
font-variant: normal;
text-transform: none;
line-height: 1;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;


&:before {
    content: "\f004";
}
`
