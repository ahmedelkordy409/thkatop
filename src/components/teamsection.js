import React from "react"
//import { Link } from "gatsby"
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
      style={{ height: `auto`, backgroundColor: `#9c27b045`, padding: "25px" }}
    >
      <SectionTitle> فريق العمل </SectionTitle>

      <CardContainer>
        <Grid container spacing={1}>
          <TeamCard
            avatar="/person_2.jpg"
            name="أحمد طارق أحمد"
            role="Team-Leader"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="اسلام أحمد أحمد"
            role="Designer"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="داليا عبدالمحسن محمد"
            role="Team-Leader"
            section="قسم علوم حاسب - تخاطب"
          />

          <TeamCard
            avatar="/person_2.jpg"
            name="الشيماء محمد حسن"
            role="Designer"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="نيرمين محمد عبدالرحمن"
            role="Founder"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="هبة الله محمد عبدالله"
            role="Founder"
            section="قسم علوم حاسب - تخاطب"
          />

          <TeamCard
            avatar="/person_2.jpg"
            name="حسام خالد منصور"
            role="Founder"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="أميرة رمضان محمد"
            role="Founder"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="مريم حمال صوفي"
            role="Founder"
            section="قسم علوم حاسب - تخاطب"
          />

          <TeamCard
            avatar="/person_2.jpg"
            name="محمد عبدالخالق محمد"
            role="Founder"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="محمد حسين جامع"
            role="Founder"
            section="قسم علوم حاسب - تخاطب"
          />
          <TeamCard
            avatar="/person_2.jpg"
            name="صفاء غاني"
            role="Founder"
            section="دكتورة تخاطب بكلية علوم ذوي الأحتياجات"
          />
        </Grid>
      </CardContainer>
    </div>
  )
}
const TeamCard = props => {
  const { avatar, name, role, section } = props

  return (
    <Grid item  md={4}  xs={12} sm={6} >
        <Card>
          <CardAvatar src={avatar} alt="ahmed elkordy" />

          <CardRole>{role} </CardRole>

          <CardName> {name} </CardName>

          <CardSection>{section} </CardSection>
        </Card>

    </Grid>
  )
}

const SectionTitle = styled.h1`
  text-align: center;
  padding: 20px 30px;
`


const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const CardLayout = styled.div`
  flex: none;
  width: 33.33333%;
  display: block;
`

const Card = styled.div`
  justify-content: center;
  background-color: white;
  position: relative;
  margin: 48px 15px;
  padding: 4rem 2rem 2rem;
  text-align: center;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 0 10px 3px #00000024;
  }
`

const CardAvatar = styled.img`
  position: absolute;
  top: -46px;
  right: 35%;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #fff;
`

const CardName = styled.h3`
  margin: 10px;
  color: #484848;
`

const CardRole = styled.span`
  color: #ccc;
  font-size: 19px;
`

const CardSection = styled.p`
font-size: 13px;
padding: 18px 0 10px;
color: #616161;
}
`
