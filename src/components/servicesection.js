import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
//import { graphql } from 'gatsby';
//import Img from 'gatsby-image';
//import { makeStyles } from "@material-ui/styles"
import Grid from '@material-ui/core/Grid';
/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))
*/
export default () => {

  return (
    <div
      id="service"
      style={{ height: `auto`, backgroundColor: `rgb(23 162 184 / 32%)`, padding: "25px" }}
    >



        <Grid container spacing={1}>


          <ServiceCard
            icon="/svg/1.svg"
            tittle="الأرشاد الأسري"
            description="  هي مجموعة من الفديوهات التوضيحية خاصة بأولياء الأمور لمساعدتهم علي التكيف مع الوضع الحالي للطفل .  "
            button=" الذهاب مباشرة الي الأرشاد الأسري"
          />

          <ServiceCard
            icon="/svg/2.svg"
            tittle="تدريبات للأطفال"
            description="  نموذج تقييم الأداء لتحديد مستوي أداء الحالي للطفل وتعطي معلومات اوليه عن اولويات التدخل ما هو الخلل الذي يعاني منه الطفل"
            button=" الذهاب الي تدريبات الأطفال "
          />

          <ServiceCard
            icon="/svg/3.svg"
            tittle="تدريبات أعضاء النطق"
            description="تدريبات اعضاءالنطق للاطفال اللذين يعانون من ضعف تلك العضلات كأطفال الشلل الدماغي ومتلازمة داون"
            button=" الذهاب الي تدريبات أعضاء النطق"
          />


        </Grid>
    </div>
  )
}
const ServiceCard = props => {
  const { icon, tittle, description, button } = props

  return (
    <Grid item xs={4}>
        <Card>
          <ServiceIcon src={icon} alt="ahmed elkordy" />
          <ServiceTittle>{tittle} </ServiceTittle>
          <ServiceDescription> {description} </ServiceDescription>
          <Link   className='button-link' to="/"> {button} </Link>
        </Card>
    </Grid>
  )
}


const Card = styled.div`
  justify-content: center;
  background-color: white;
  position: relative;
  margin: 48px 15px;
  padding: 4rem 2rem 2rem;
  text-align: center;
  border-radius: 7px;
  &:hover {
    box-shadow: 0 0 10px 3px #00000024;
  }
  .button-link {
        background: #dc3545;
        border-color: #dc3545;
        margin-top: 1.5rem!important;
        border-top-left-radius: 33px;
        border-bottom-right-radius: 33px;
        display: inline-block;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        text-decoration: none;
        padding: 10px 20px;

  }
`

const ServiceIcon = styled.img`
  height: 90px;
`

const ServiceTittle = styled.h3`
margin: 10px;
color: #484848;
padding: 20px 0;
`

const ServiceDescription = styled.p`
    color: #777;
    line-height: 2;
    `

const ServiceButton = styled.a`
font-size: 13px;
padding: 18px 0 10px;
color: #616161;
`
