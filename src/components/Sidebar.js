import * as React from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import GroupIcon from "@mui/icons-material/Group"
import { createTheme, ThemeProvider } from "@mui/material"
import Divider from "@mui/material/Divider"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import { useContext } from "react"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout, profile } = useContext(DrivingSchoolContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
        {profile?.role === "Admin" ? (
          <>
            <List>
              <Link to="/admins">
                <ListItem button>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="admins" sx={{ color: "white", textDecoration: "none" }} />
                </ListItem>
              </Link>
            </List>

            <List>
              <Link to="/trainees">
                <ListItem button>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="trainees" sx={{ color: "white", textDecoration: "none" }} />
                </ListItem>
              </Link>
            </List>

            <List>
              <Link to="/inspectors">
                <ListItem button>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="inspectors" sx={{ color: "white", textDecoration: "none" }} />
                </ListItem>
              </Link>
            </List>

            <List>
              <Link to="/allCoaches">
                <ListItem button>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="all coaches" sx={{ color: "white", textDecoration: "none" }} />
                </ListItem>
              </Link>
            </List>
          </>
        ) : (
          <List>
            <Link to="/coaches">
              <ListItem button>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="coaches" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        )}

        <List style={{ marginTop: "auto" }}>
          
          {localStorage.tokenDashboard ? (
            <>
            {profile.role === "Admin"?(
              <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
            ):(
              <Link to="/loginInspector">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText
                  primary="logout Inspector"
                  sx={{ color: "white", textDecoration: "none" }}
                  onClick={logout}
                />
              </ListItem>
            </Link>
            )}
            
            </>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login Admin" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
          <Divider />
          
            
              
            
            
            
          
            <Link to="/loginInspector">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login Inspector" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
       
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
