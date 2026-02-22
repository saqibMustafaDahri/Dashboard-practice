"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Btn from "../../Atoms/Btn/page";
import MenuIcon from "@mui/icons-material/Menu";
import BoxAtom from "../../Atoms/BoxAtom/page";

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    router.push(path);
    handleCloseMenu();
  };

  const navBtnStyle = {
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
      opacity: 0.8,
      boxShadow: "none",
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        height: "auto",
        minHeight: { xs: 55, md: 70 },
        width: "95%",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "50px",
        top: 15,
        justifyContent: "center",
        backgroundColor: "white",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 1, sm: 3 },
        }}
      >
        <BoxAtom sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            <Btn
              href="ContactUs"
              sx={navBtnStyle}
              disableRipple
              text="Contact us"
            />
            <Btn href="WhyUs" sx={navBtnStyle} disableRipple text="Why us" />
          </Box>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              sx={{ color: "black", p: 0.5 }}
              onClick={handleOpenMenu}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                sx: { borderRadius: "15px", mt: 1, overflow: "hidden" },
              }}
            >
              <MenuItem
                onClick={() => handleNavigate("/ContactUs")}
                sx={{ fontWeight: "bold" }}
              >
                Contact us
              </MenuItem>

              <MenuItem
                onClick={() => handleNavigate("/WhyUs")}
                sx={{ fontWeight: "bold" }}
              >
                Why us
              </MenuItem>
            </Menu>
          </Box>
        </BoxAtom>

        <BoxAtom>
          <img
            src="signature.png"
            style={{
              height: "auto",
              maxHeight: "45px",
              minHeight: "35px",
              objectFit: "contain",
            }}
            alt="logo"
          />
        </BoxAtom>

        <BoxAtom sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Btn
            href="Login"
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: { xs: "11px", md: "14px" },
              borderRadius: "20px",
              px: { xs: 1.5, md: 3 },
              py: { xs: 0.5, md: 1 },
              background:
                "linear-gradient(60deg, #87CEEB 20%, #000 70%, #FF0000 100%)",
              "&:hover": { opacity: 0.9 },
            }}
            text="Login"
          />
        </BoxAtom>
      </Toolbar>
    </AppBar>
  );
}
