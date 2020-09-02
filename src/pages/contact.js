import React from "react"
import SEO from "../components/seo"
import LayOut from "../components/layout"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },

  },
  item:{
    padding: "51px"
  },
  fullwidth: {
    width: "100%"
  },
  halfwidth: {
    width: "50%"
  },
}));


export default () => {
  const classes = useStyles();

return(
  <LayOut
  background="/img_3.jpg"
  >

     <SEO
       lang="ar"
       title="ahmed elkordy"
       description="dev by ahmed elkordy"
       meta="xxx xxx xxx xxx"
       />


  <CssBaseline />
   <Container>
       <Container>
        <Grid container spacing={10} >
            <Grid item md={8}  xs={12} sm={12}>
            <form className={classes.root} noValidate autoComplete="off">
                       <div className={classes.fullwidth} >
                        <TextField
                          required
                          id="outlined-required"
                          label="الاسم الاول"
                          variant="outlined"
                          className={classes.halfwidth}
                          style={{paddingLeft: 25}}
                        />


                        <TextField
                          id="outlined-disabled"
                          variant="outlined"
                          label="الاسم الاخير"
                          className={classes.halfwidth}
                        />

                        </div>

                        <div className={classes.fullwidth}>

                        <TextField
                          fullWidth
                          id="outlined-password-input"
                          label="الايميل"
                          autoComplete="current-password"
                          variant="outlined"
                        />
                        </div>

                        <div className={classes.fullwidth}>
                        <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="الرسالة"
                        multiline
                        rows={6}
                        variant="outlined"
                        />

                        </div>

                          <Button variant="contained" color="secondary">
                            ارسال
                          </Button>
                      </form>

            </Grid>


            <Grid item md={4}  xs={12} sm={12} >
            <Typography variant="h5" gutterBottom style={{lineHeight: 2}}>
            معلومات الاتصال
            </Typography>
            <Typography variant="body1" style={{lineHeight: 2}} gutterBottom>
            العنوان
            </Typography>

            <Typography variant="body2" style={{lineHeight: 2}} gutterBottom>
            بني سويف مصر
            </Typography>

            <Typography variant="body1" style={{lineHeight: 2}} gutterBottom>
            جوال:
            </Typography>

            <Typography variant="body2" style={{lineHeight: 2}} gutterBottom>
            +1 242 4942 290
            </Typography>

            <Typography variant="body1" style={{lineHeight: 2}} gutterBottom>
            بريد الكتروني:
            </Typography>

            <Typography variant="body2" style={{lineHeight: 2}} gutterBottom>
            info@yourdomain.com
            </Typography>






            </Grid>

       </Grid>
       </Container>

       </Container>


  </LayOut>
)
}
