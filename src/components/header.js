import React from "react"
import styled from "styled-components";
//import { graphql } from 'gatsby';
//import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default (props) =>{

  const classes = useStyles();

return(
<Layout>
  <Parallax background={props.bgimage}/>
  <MetaContaner className={classes.root}>

      <Typography variant="h5" gutterBottom
        style={{
          color: "black",
          lineHeight: '50px'
         }}>

         {props.subtittle}
      </Typography>

      <Typography variant="h4" gutterBottom
       style={{
              textShadow: "-1px 0px 0 #212120",
              color: "#FF5722",
              fontWeight: "bold",
              lineHeight: '50px'

        }}>

         {props.tittle}
      </Typography>

  </MetaContaner>
</Layout>
)
}




const Layout = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
`


const MetaContaner = styled.div`
    z-index: 10;
    right: 60px;
    top: 46vh;
    position: absolute;
    width: 70%;
`



const Parallax = styled.div`
    width: 100%;
      /* The image used */
    transform: scaleX(-1);

    background-image: url(${(props) => props.background});
    /* Set a specific height */
    height: 100vh;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% -25px;
    z-index: 2;
    position: relative;



      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }

      @media only screen and (max-device-width: 1366px) {
         background-position: 83% 4px;
      }

`
