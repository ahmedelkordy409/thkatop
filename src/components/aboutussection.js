import React from "react"
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player/youtube'


export default () => {

  return (
    <div  id="about" className="video_section">


<div className="tittle_head">
<Typography variant="h4" gutterBottom style={{lineHeight: 2}}>
   فكر عمل الموقع
</Typography>
<Typography variant="body1" style={{lineHeight: 2}} gutterBottom>
  كلیة علوم ذوي الاحتیاجات الخاصة كلیة متمیزة على المستوى القومي تمد المجتمع بكوادر بش
</Typography>

</div>




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
