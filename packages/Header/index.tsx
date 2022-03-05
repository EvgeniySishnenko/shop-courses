import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import navList from "@packages/Header/consts/navbar.const";
import Link from "next/link";
import { NavLink } from "./elements";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: "flex" }}>
            {navList.map((page) => (
              <Link href={page.link} key={page.title}>
                <NavLink>{page.title}</NavLink>
              </Link>
            ))}
            <Button sx={{ color: "white", textTransform: "none" }}>
              Выйти
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
