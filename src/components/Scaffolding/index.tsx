import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import noop from "lodash.noop";

const drawerWidth = 210;

export default function ScaffoldingAppBar() {
  const theme = useTheme();
  const toggleTheme = theme.toggleTheme as (k: any) => () => {};
  const { mode } = theme.palette;

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sine Cosine Calculator
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem sx={{ flexDirection: "column" }}>
              <Box sx={{ width: "100%" }}>
                <Typography variant="overline">Theme</Typography>
              </Box>
              <ToggleButtonGroup color="primary" value={mode} exclusive>
                <ToggleButton
                  value="dark"
                  onClick={mode === "dark" ? noop : toggleTheme("dark")}
                >
                  dark
                </ToggleButton>
                <ToggleButton
                  value="light"
                  onClick={mode === "light" ? noop : toggleTheme("light")}
                >
                  light
                </ToggleButton>
              </ToggleButtonGroup>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
