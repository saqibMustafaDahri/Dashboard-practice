"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Menu, MenuItem, IconButton } from "@mui/material";
import Btn from "../../Atoms/Btn/page";
import MenuIcon from "@mui/icons-material/Menu";
import BoxAtom from "../../Atoms/BoxAtom/page";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        height: { xs: 50, md: 60 },
        width: "90%",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: 10,
        top: 10,
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: { xs: "50px", md: "60px" },
        }}
      >
        <BoxAtom sx={{ display: { xs: "none", sm: "flex" } }}>
          <Btn
            href={"ContactUs"}
            sx={{
              background: "none",
              transition: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "10px", md: "14px" },
              border: "none",
              boxShadow: "none",
              "&:hover": {
                background: "none",
                backgroundColor: "transparent",
                opacity: 1,
                boxShadow: "none",
              },
            }}
            disableRipple
            text="Contact us"
          />
          <Btn
            href={"WhyUs"}
            sx={{
              background: "none",
              transition: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "10px", md: "14px" },
              border: "none",
              boxShadow: "none",
              "&:hover": {
                background: "none",
                backgroundColor: "transparent",
                opacity: 1,
                boxShadow: "none",
              },
            }}
            disableRipple
            text="Why us"
          />
        </BoxAtom>

        <BoxAtom sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton sx={{ color: "black" }} onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <BoxAtom sx={{ backgroundColor: "black" }}>
              <MenuItem
                onClick={handleCloseMenu}
                sx={{
                  background:
                    "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
                  color: "white",
                }}
              >
                Contact us
              </MenuItem>
              <MenuItem
                onClick={handleCloseMenu}
                sx={{
                  background:
                    "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
                  color: "white",
                }}
              >
                Why us
              </MenuItem>
            </BoxAtom>
          </Menu>
        </BoxAtom>

        <BoxAtom>
          <img
            src="signature.png"
            style={{ height: "70px", color: "red", objectFit: "cover" }}
            alt="logo"
          />
        </BoxAtom>

        <BoxAtom>
          <Btn
            href="Login"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "10px", md: "14px" },
              border: "none",
              borderRadius: "20px",
              px: 2,
              background:
                "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
              "&:hover": { opacity: 0.9 },
            }}
            text="Login"
          />
        </BoxAtom>
      </Toolbar>
    </AppBar>
  );
}
