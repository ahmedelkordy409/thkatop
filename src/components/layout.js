import React from "react"
import Header from "./header"
import OldNavBar from "./oldnavbar"
import Footer from "./footer"


export default (props) =>(
<>
<OldNavBar/>

<Header
bgimage="/img_3.jpg"
title="هيا لنجعل حياة أطفالنا أكثر متعة"
description="نـحـن بـكـم نـسـتـطـيـع"
/>


{props.children}


<Footer />

</>
)
