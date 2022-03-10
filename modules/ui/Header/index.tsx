import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import navList from "@modules/ui/Header/consts/navbar.const";
import Link from "next/link";
import { NavLink } from "./elements";
import { useAppDispatch } from "@core/hooks/redux";
import { logout } from "@modules/auth/reducer/actions";

export const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
            {navList.map(({ link, title }) => (
              <Link href={link} key={title}>
                <NavLink>{title}</NavLink>
              </Link>
            ))}
            <Button
              onClick={handleLogout}
              sx={{ color: "white", textTransform: "none" }}
            >
              Выйти
            </Button>
            <Link href={"/auth/login"}>
              <NavLink>Вход</NavLink>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
