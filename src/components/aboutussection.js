import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import SectionHead from './sectionhead';
import ReactPlayer from 'react-player/youtube'


export default () => {

  return (
    <div
    id="about"
      style={{ height: `auto`,  padding: "136px" }}
    >


   <SectionHead
name=" نظرة عامة عن الكلية"
description="  كلیة علوم ذوي الاحتیاجات الخاصة كلیة متمیزة على المستوى القومي تمد المجتمع بكوادر بش"
/>


    <Grid container spacing={1}>
        <Grid item xs={12}>
          <VideoWarrp>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
              />
          </VideoWarrp>
        </Grid>
     </Grid>
    </div>
  )
}


const VideoWarrp= styled.div`
height: 100vh;
max-height: 313px;
min-height: 100px;
`
