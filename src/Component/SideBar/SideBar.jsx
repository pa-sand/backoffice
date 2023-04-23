import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { SideBarDatas } from "./sideBarData";
import Styles from "./Siddebar.module.css";

export default function SideBar() {
  return (
    <Box
      sx={{
        display: "flex",
        borderLeft: "1px solid black",
        height: "100vh",
      }}
    >
      <List>
        {SideBarDatas.map((item, key) => (
          <ListItem key={key} disablePadding>
            <NavLink
              to={item.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "blue" : "white" };
              }}
            >
              <ListItemButton
                sx={{
                  direction: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                }}
                className={Styles.sideBarItem}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
