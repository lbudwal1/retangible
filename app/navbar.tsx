"use client"
import React from "react";
import { Avatar, Drawer, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { DataSourceIcon, EventIcon, HomeIcon, SettingsIcon, StatsIcon } from "@/components/shared/icons";
import { BLUE_COLOR, GREEN_COLOR, PURPLE_COLOR, RED_COLOR, theme } from "@/components/shared/theme";

const links = [
  { label: "Home", icon: <HomeIcon color={RED_COLOR} />, path: "/" },
  { label: "Data Sources", icon: <DataSourceIcon color={BLUE_COLOR} />, path: "/datasources" },
  { label: "Events", icon: <EventIcon color={GREEN_COLOR} />, path: "/events" },
  { label: "Stats", icon: <StatsIcon color={PURPLE_COLOR} />, path: "/stats" },
];

const bottomLink = { label: "Settings", path: "/settings" };

interface INavbarProps {

}

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>

        {links.map((link) => (
          <ListItem button key={link.label} component="a" href={link.path}>
            <ListItemAvatar>
              <Avatar>
                {link.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>

      <List style={{ marginTop: "auto" }}>
        <ListItem button key={bottomLink.label} component="a" href={bottomLink.path}>
          <ListItemAvatar>
            <Avatar>
              <SettingsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={bottomLink.label} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
