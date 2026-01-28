"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { db } from "../../../../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import BoxAtom from "../../Atoms/BoxAtom/page";
import Btn from "../../Atoms/Btn/page";
import TypographyAtom from "../../Atoms/TypographyAtom/page";
import { fieldStyle } from "../../../Constants/data";
import { PersonAddOutlined } from "@mui/icons-material";

const UserDetail = () => {
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    email: "",
    title: "",
    dept: "",
    status: "Active",
    role: "",
    img: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserData(usersList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddClick = () => {
    setIsAdding(true);
    setSelectedUser({
      name: "",
      email: "",
      title: "",
      dept: "",
      status: "",
      role: "",
      img: "https://i.pravatar.cc/150?u=5",
    });
    setOpen(true);
  };

  const handleEditClick = (user) => {
    setIsAdding(false);
    setSelectedUser({ ...user });
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (isAdding) {
        const docRef = await addDoc(collection(db, "users"), selectedUser);
        console.log("Document written with ID: ", docRef.id);
      } else {
        const userRef = doc(db, "users", selectedUser.id);
        const { id, ...dataToUpdate } = selectedUser;
        await updateDoc(userRef, dataToUpdate);
      }

      fetchUsers();
      setOpen(false);
    } catch (error) {
      console.error("Error saving: ", error);
      alert("Something went wrong!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  if (loading)
    return (
      <TypographyAtom text="Loading Data..." sx={{ color: "white", p: 5 }} />
    );

  return (
    <>
      <BoxAtom
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
        }}
      ></BoxAtom>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflowX: "auto",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                NAME
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                TITLE
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                STATUS
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                ROLE
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingLeft: "50px",
                }}
              >
                <PersonAddOutlined
                  style={{ fontSize: "30px" }}
                  onClick={handleAddClick}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.05)" },
                }}
              >
                <TableCell>
                  <BoxAtom
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <Avatar src={user.img} />
                    <BoxAtom>
                      <TypographyAtom
                        variant="subtitle2"
                        sx={{ color: "black", fontWeight: "bold" }}
                        text={user.name}
                      />
                      <TypographyAtom
                        variant="body2"
                        sx={{ color: "black" }}
                        text={user.email}
                      />
                    </BoxAtom>
                  </BoxAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom
                    variant="subtitle2"
                    sx={{ color: "black" }}
                    text={user.title}
                  />
                  <TypographyAtom
                    variant="body2"
                    sx={{ color: "black" }}
                    text={user.dept}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={user.status}
                    size="small"
                    sx={{ bgcolor: "#75D9A0", color: "black" }}
                  />
                </TableCell>
                <TableCell>
                  <TypographyAtom
                    variant="body2"
                    sx={{ color: "black" }}
                    text={user.role}
                  />
                </TableCell>
                <TableCell align="right">
                  <Btn
                    text="Edit"
                    sx={{ color: "white", border: "none", fontWeight: "bold" }}
                    onClick={() => handleEditClick(user)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle sx={{ backgroundColor: "#363636", color: "white" }}>
          {isAdding ? "Add New User" : "Edit User Details"}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#363636",
          }}
        >
          {isAdding && (
            <>
              <BoxAtom
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  backgroundColor: "#363636",
                }}
              >
                <TextField
                  label="Full Name"
                  name="name"
                  fullWidth
                  value={selectedUser.name}
                  onChange={handleChange}
                  sx={fieldStyle}
                />
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  value={selectedUser.email}
                  onChange={handleChange}
                  sx={fieldStyle}
                />
                <TextField
                  label="Image URL"
                  name="img"
                  fullWidth
                  value={selectedUser.img}
                  onChange={handleChange}
                  sx={fieldStyle}
                />
              </BoxAtom>
            </>
          )}
          <BoxAtom
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#363636",
              pt: 2,
            }}
          >
            <TextField
              label="Title"
              name="title"
              fullWidth
              value={selectedUser.title}
              onChange={handleChange}
              sx={fieldStyle}
            />
            <TextField
              label="Department"
              name="dept"
              fullWidth
              value={selectedUser.dept}
              onChange={handleChange}
              sx={fieldStyle}
            />
            <TextField
              label="Status"
              name="status"
              fullWidth
              value={selectedUser.status}
              onChange={handleChange}
              sx={fieldStyle}
            />
            <TextField
              label="Role"
              name="role"
              fullWidth
              value={selectedUser.role}
              onChange={handleChange}
              sx={fieldStyle}
            />
          </BoxAtom>
        </DialogContent>
        <DialogActions sx={{ padding: 3, backgroundColor: "#363636" }}>
          <Btn
            text="Cancel"
            sx={{ color: "white", border: "none", fontWeight: "bold" }}
            onClick={() => setOpen(false)}
          />
          <Btn
            text={isAdding ? "Add User" : "Save Changes"}
            sx={{ color: "white", border: "none", fontWeight: "bold" }}
            onClick={handleSave}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserDetail;
