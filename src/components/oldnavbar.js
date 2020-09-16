import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"
import FacebookIcon from "@material-ui/icons/Facebook"

import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

//  https://cdn.statically.io/img/i.ibb.co/3pbNz2c/logo.jpg?w=100px&h=100px&f=auto

const navData = [
  {
    name: "الرئيسية",
    link: "/",
  },
  {
    name: "عن الكلية ",
    link: "/about/",
  },
  {
    name: "الخدمات",
    link: "/#service",
  },
  {
    name: "ذوي الهمم",
    link: "/article/",
  },
  {
    name: "فكرة الموقع",
    link: "/#about",
  },
  {
    name: "تواصل معنا",
    link: "/contact/",
  },
]

export default props => {
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  return (
    <NavContaner>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavLogo>
          {
            //  كلية علوم ذوي الاحتياجات الخاصة
          }
          <img
            src="https://cdn.statically.io/img/i.ibb.co/3pbNz2c/logo.jpg?w=100px&h=100px&f=auto"
            alt=" كلية علوم ذوي الاحتياجات الخاصة"
          />
        </NavLogo>

        <NavLinks>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("right", true)}
            edge="start"
            className="icons m_down"
          >
            <MenuIcon />
          </IconButton>

          {navData.map((nav, index) => (
            <Link
              key={index}
              activeStyle={{ color: "red" }}
              className="nav-link m_up"
              to={nav.link}
            >
              {nav.name}
            </Link>
          ))}

          <TwitterIcon className="icons fl" style={{ color: "#03a9f4cc" }} />
          <YouTubeIcon
            className="icons fl"
            style={{ color: "rgb(255 17 0 / 80%)" }}
          />
          <FacebookIcon className="icons fl" style={{ color: "#3f51b5e6" }} />
        </NavLinks>
      </Container>

      <Drawer
        anchor="left"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <List style={{ paddingTop: 58 }}>
            {navData.map((nav, index) => (
              <Link activeStyle={{ color: "red" }} to={nav.link} key={index}>
                <ListItem button style={{ paddingRight: 36, paddingLeft: 50 }}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={nav.name}
                    style={{ fontWeight: "bold", color: "black" }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </NavContaner>
  )
}

const NavContaner = styled.header`
    display: block;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 999;
    padding: 1rem;
}
`

const NavLogo = styled.div`
  padding: 16px 22px;
  display: block;
  width: 100%;
  img {
    height: 100px;
  }
`

const NavLinks = styled.nav`
  display: block;
  width: 100%;
  justify-content: flex-end;
  padding: 0 15px;
  background-color: white;
  border-radius: 50px;

  .nav-link {
    font-size: 22px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 27px 15px;
    display: inline-block;
    width: auto;
  }

  .fl {
    float: left;
  }

  .icons {
    margin: 9px 20px;
    font-size: 2rem;
    height: 2em;
  }

  .m_up {
    display: inline-block;
  }
  .m_down {
    display: none;
  }

  @media only screen and (max-width: 970px) {
    .m_up {
      display: none;
    }
    .m_down {
      display: inline-block;
    }
    .icons {
      margin: 4px 10px;
      font-size: 1.8rem;
    }
  }
`
