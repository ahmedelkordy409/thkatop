import React from "react"
import LayOut from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

//import styled from "styled-components"

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';



import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CardActions from '@material-ui/core/CardActions';




import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const games = [
{
  id: 1,
  image: "/games/1.jpg",
  tittle: "لعبه 1",
  url: "https://drive.google.com/file/d/1o3W7tko4Mc1Cx2SBavUAtfaxSWjffCuf/view?usp=drivesdk",
},
{
  id: 2,
  image: "/games/2.jpg",
  tittle: "لعبه 1",
  url: "https://drive.google.com/file/d/1o3W7tko4Mc1Cx2SBavUAtfaxSWjffCuf/view?usp=drivesdk",
},
{
  id: 3,
  image: "/games/3.jpg",
  tittle: "لعبه 1",
  url: "https://drive.google.com/file/d/1o3W7tko4Mc1Cx2SBavUAtfaxSWjffCuf/view?usp=drivesdk",
},
{
  id: 4,
  image: "/games/4.jpg",
  tittle: "لعبه 1",
  url: "https://drive.google.com/file/d/1o3W7tko4Mc1Cx2SBavUAtfaxSWjffCuf/view?usp=drivesdk",
},
{
  id: 5,
  image: "/games/5.jpg",
  tittle: "لعبه الارقام",
  url: "https://1drv.ms/p/s!AgG2GfpF2qNdadgdnIQjurufTf4",
},
];




const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
  },
  appBar: {
      position: 'relative',
  },
  container:{
    margin: '45px 21px'
  },
  paper: {
    boxShadow: 'none',
  },
  media: {
    height: 200,
  },
  tittle: {
    boxShadow: 'none',
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





export default () => {
  const classes = useStyles();


  const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };



return(
  <LayOut
    background="/img_5.jpg"
  >
     <SEO
       lang="ar"
       title="ahmed elkordy"
       description="dev by ahmed elkordy"
       meta="xxx xxx xxx xxx"
      />



     <Container fixed style={{padding: "60px 43px"}}>
      <h1>
         البرامج التعليميه
      </h1>



      <CssBaseline />

       <Grid container spacing={3} >
           { games.map((game,index)=>(
               <Grid item md={4}  xs={12} sm={6} key={game.index}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={game.image}
                        title="ahmed elkordy"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {game.tittle}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                          بدا العبه
                        </Button>
                    </CardActions>
                  </Card>



                  <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                      <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                          <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                         {game.tittle}
                        </Typography>
                      </Toolbar>
                    </AppBar>





  <iframe src="https://onedrive.live.com/embed?cid=1279CF6FCC04ACB9&resid=1279CF6FCC04ACB9%21124&authkey=AMtUyBp8Cd2UCco&em=2" width="402" height="327" frameborder="0" scrolling="no"></iframe>
                  </Dialog>
               </Grid>
         ))}
      </Grid>

      </Container>

  </LayOut>
)
}
