import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))
*/

const teamData = [
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/nRL0c2T/3.jpg?w=100&h=100&f=auto",
    name: "د . صفاء إبراهيم",
    role: "Doctor",
    section: "دكتورة تخاطب بكلية علوم ذوي الأحتياجات",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/5kTtdp4/1.jpg?w=100&h=100&f=auto",
    name: "أحمد طارق أحمد",
    role: "Team-Leader",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar:
      "https://cdn.statically.io/img/i.ibb.co/VmF0JXv/Islam.jpg?w=100&h=100",
    name: "اسلام أحمد أحمد",
    role: "Designer",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/mR9Q9Yx/dalia.jpg?w=100&h=100&f=auto",
    name: "داليا عبدالمحسن محمد",
    role: "Team-Leader",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/C2QgYHb/2.jpg?w=100&h=100&f=auto",
    name: "الشيماء محمد حسن",
    role: "Designer",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/gRdMB1x/nermen-auto-x2.jpg?w=100&h=100&f=auto",
    name: "نيرمين محمد عبدالرحمن",
    role: "Founder",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/9ZL0LxZ/hepa-optimized-auto-x1.jpg?w=100&h=100&f=auto",
    name: "هبة الله محمد عبدالله",
    role: "Founder",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/QpLbDq0/hossam.jpg?w=100&h=100&f=auto",
    name: "حسام خالد منصور",
    role: "Founder",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/Gc5PW8h/amira1.jpg?w=100&h=100&f=auto",
    name: "أميرة رمضان محمد",
    role: "Founder",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/RyHFb15/marim.jpg?w=100&h=100&f=auto",
    name: "مريم جمال صوفي",
    role: "Founder",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/qRvbJ10/beta.jpg?w=100&h=100&f=auto",
    name: "محمد عبدالخالق محمد",
    role: "Founder",
    section: "قسم علوم حاسب - تخاطب",
  },
  {
    avatar: "https://cdn.statically.io/img/i.ibb.co/ckXXVPY/hussien.jpg?w=100&h=100&f=auto",
    name: "محمد حسين جامع",
    role: "Founder",
    section: "قسم علوم حاسب - تخاطب",
  },
]

export default () => {
  return (
    <div
      style={{
        height: `auto`,
        backgroundColor: `rgb(23 162 184 / 32%)`,
        padding: "25px",
      }}
    >
      <SectionTitle> فريق العمل </SectionTitle>

      <CardContainer>
        <Grid container spacing={1}>
          {teamData.map((team, index) => (
            <Grid item md={4} xs={12} sm={6}>
              <Card>
                <CardAvatar src={team.avatar} alt="ahmed elkordy" />
                <CardRole>{team.role} </CardRole>
                <CardName> {team.name} </CardName>
                <CardSection>{team.section} </CardSection>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContainer>
    </div>
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
  width: 90px;
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
