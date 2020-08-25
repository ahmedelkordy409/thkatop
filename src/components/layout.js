import React from "react"
import Header from "./header"
import OldNavBar from "./oldnavbar"
import Footer from "./footer"
import Container from '@material-ui/core/Container';


export default (props) =>(
<Container>
<OldNavBar/>

<Header
bgimage={props.background}
subtittle="هيا لنجعل حياة أطفالنا أكثر متعة"
tittle="نـحـن بـكـم نـسـتـطـيـع"
/>


{props.children}


<Footer />

</Container>
)
