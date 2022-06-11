import { Avatar, Box, Card, CardActionArea, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";
import { Scrollbars } from "react-custom-scrollbars";
import DisplayProfiles from "./DisplayProfiles";
function AllEmployees({ setEmployee,profiles }) {


  const handleClick = (profile) => {
    setEmployee(profile);
    // console.log(profile)
  };

  return (
    <Grid container>
      {/* <Grid item md={4}> */}
      <Scrollbars style={{ height: 580 }}>
        <Box sx={{ mt: 0, padding: 2 }}>
          {profiles &&
            profiles.map((profile) => (
              <Card
                key={profile.user._id}
                onClick={() => {
                  handleClick(profile);
                }}
                sx={{ mb: 1 }}
              >
                  <CardActionArea sx={{p : 2}}>
                <Grid container s>
                  <Grid item md={2}>
                    <Avatar src={profile.user.profilePic} />
                  </Grid>
                  <Grid item md={10}>
                    {profile.user.employeeFirstName +
                      " " +
                      profile.user.employeeLastName +
                      " | " +
                      profile.user.jobRole}
                  </Grid>
                </Grid>
                </CardActionArea>
              </Card>
            ))}
        </Box>
      </Scrollbars>
      {/* </Grid> */}
      {/* <Grid item md={8}>
        <DisplayProfiles />
      </Grid> */}
    </Grid>
  );
}

export default AllEmployees;
