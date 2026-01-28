"use client";
import React, { useState } from "react";
import Link from "next/link";
import Btn from "../../Atoms/Btn/page";
import { Avatar, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TypographyAtom from "../../Atoms/TypographyAtom/page";
import BoxAtom from "../../Atoms/BoxAtom/page";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorageIcon from "@mui/icons-material/Storage";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from "@mui/icons-material/Description";
export default function SideBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "Dashboard", path: "/Dashboard", icon: <DashboardIcon /> },
    { name: "Users Data", path: "/Panel", icon: <StorageIcon /> },
    { name: "Home", path: "/Home", icon: <HomeIcon /> },
    { name: "Login", path: "/Login", icon: <LoginIcon /> },
    { name: "LogOut", path: "/", icon: <LogoutIcon /> },
    { name: "SignUp", path: "/Register", icon: <PersonAddIcon /> },
    { name: "Form", path: "/Form", icon: <DescriptionIcon /> },
  ];

  const SidebarDesign = () => (
    <>
      <BoxAtom
        sx={{
          width: "100%",
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <BoxAtom
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: 1,
          }}
        >
          <Avatar sx={{ height: "100px", width: "100px" }} src="me.jpeg" />
        </BoxAtom>

        <BoxAtom sx={{ width: "100%" }}>
          <TypographyAtom
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
            text="Saqib Mustafa"
          />
          <TypographyAtom
            sx={{ fontSize: "12px", color: "white" }}
            text="Admin"
          />
        </BoxAtom>
      </BoxAtom>

      {menuItems.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          style={{ textDecoration: "none" }}
          onClick={() => setMobileOpen(false)}
        >
          <Btn
            startIcon={item.icon}
            sx={{
              background: "none",
              width: "100%",
              border: "none",
              color: "white",
              marginTop: "10px",
              paddingY: "12px",
              cursor: "pointer",
              justifyContent: "flex-start",
              paddingLeft: "10px",
              "& .MuiButton-startIcon": { color: "white" },
            }}
            text={item.name}
          />
        </Link>
      ))}
    </>
  );

  return (
    <>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: mobileOpen ? "none" : "flex", md: "none" },
          position: "fixed",
          top: 2,
          left: 2,
          zIndex: 1100,
          backgroundColor: "#1C95FF",
          color: "white",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          "&:hover": { backgroundColor: "#eee" },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "280px",
            padding: "20px",
            boxShadow: "4px 0px 10px rgba(0,0,0,0.1)",
            backgroundColor: "#001652",
            // Desktop jaisa scroll behavior mobile drawer me bhi:
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          },
        }}
      >
        <SidebarDesign />
      </Drawer>

      <BoxAtom
        sx={{
          display: { xs: "none", md: "block" },
          width: "20%",
          height: "100vh",
          backgroundColor: "#001652",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          // --- SCROLL ADDED HERE ---
          overflowY: "auto", // Ye scroll enable karta hai
          scrollbarWidth: "none", // Firefox ke liye scrollbar hide karega
          "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari ke liye scrollbar hide karega
        }}
      >
        <SidebarDesign />
      </BoxAtom>
    </>
  );
}
