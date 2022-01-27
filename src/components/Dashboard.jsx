import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Paper } from "@mui/material";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ maxWidth: 700 }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ margin: "30px 10px", paddingTop: "10px" }}
        data-cy="flash-message"
      >{`Welcome ${currentUser.name}!`}</Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/article/create")}
        data-cy="create-article-btn"
        style={{ margin: "20px 10px" }}
        endIcon={<HistoryEduIcon />}
      >
        Create new article
      </Button>
    </Paper>
  );
};

export default Dashboard;
