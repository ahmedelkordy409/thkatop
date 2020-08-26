import React from "react"
import LayOut from "../components/layout"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactPlayer from 'react-player/youtube'
import Typography from '@material-ui/core/Typography';



const videos= [
{
  _id: 1,
  tittle: "تدريبات لأعضاء النطق والكلام .",
  url: "https://youtu.be/DC92ajHV8ZM"
},
{
  _id: 2,
  tittle: "تدريبات لأعضاء النطق والكلام",
  url: "https://youtu.be/YyJHsv49vOI"
},
{
  _id: 3,
  tittle: "تدريبات لأعضاء النطق والكلام",
  url: "https://youtu.be/OY1kHQ_pLqI"
},
{
  _id: 4,
  tittle: "تمارين لتقوية عضلات اليد لمساعدة الطفل علي الكتابة ",
  url: "https://youtu.be/oxi0pZHZ5nI"
},
{
  _id: 5,
  tittle: "مهارة لزيادة التركيز والأنتباه لدي الطفل",
  url: "https://youtu.be/GmTVLn8RWEg"
},
{
  _id: 5,
  tittle: "تدريب يساعد علي التأزر الحركي البصري",
  url: "https://youtu.be/J9KeEZ_MVFw"
}
];


export default () => {


return(
  <LayOut
    background="/img_2.jpg"
  >
     <SEO
       lang="ar"
       title="ahmed elkordy"
       description="dev by ahmed elkordy"
       meta="xxx xxx xxx xxx"
      />

     <CssBaseline/>

     <Container fixed style={{padding: "60px 140px"}}>
      <h1>   البرامج التعليميه  </h1>


{videos.map((video,index)=>(
  <>

      <Typography variant="h4" gutterBottom style={{lineHeight: 2}}>
      <span style={{
        color: "orange",
        paddingLeft: 15
      }}>
      #{video.id}
      </span>
      {video.tittle}
      </Typography>


      <ReactPlayer
        className='react-player'
        url={video.url}
        width='100%'
        height='40vh'
      />

  </>

))}



      </Container>

  </LayOut>
)
}
