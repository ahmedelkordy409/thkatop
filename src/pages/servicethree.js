import React from "react"
import LayOut from "../components/layout"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactPlayer from 'react-player/youtube'
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"



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
  _id: 6,
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

     <Container fixed   className='video_section'>
      <h1>   البرامج التعليميه  </h1>


      {videos.map((video,index)=>(
        <VideoWarrap key={index}>

            <Typography variant="h4" gutterBottom style={{lineHeight: '1.8'}}>
            <span style={{
              color: "orange",
              paddingLeft: 15
            }}>
            #{video._id}
            </span>
            {video.tittle}
            </Typography>


            <ReactPlayer
              className='react-player video_player'
              url={video.url}
              width='100%'
            />

        </VideoWarrap>

      ))}



      </Container>

  </LayOut>
)
}




const VideoWarrap = styled.h1`
    margin: 0 0 90px;

    .video_section {
      height: auto;
      padding: 136px 200px;
    }


    .video_section .tittle_head {
      height: auto;
      padding: 50px 0;
    }

    .video_section .video_player {
      width: 100%;
      height: 340px;

    }



    /*****************************************
    **  video section style
    ******************************************/


    @media only screen and (max-width: 768px) {

      .video_section {
        padding: 56px 5px;
      }

      .tittle_head {
        height: auto;
        padding: 50px 0;
        text-align: center;
      }

      .video_section .video_player {
        width: 100%;
        height: 170px;
        margin: 0 0 90px;
      }



    }


`
