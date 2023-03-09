import React from "react";
import { userSelector } from "../../features/auth";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const { user } = useSelector(userSelector);
  const favoriteMovies = true;
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  console.log("Profile");
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add favroites or watchlist some movies to se them here!
        </Typography>
      ) : (
        <Box>FAVORITE MOVIES </Box>
      )}
    </Box>
  );
};

export default Profile;
