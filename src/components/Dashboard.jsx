import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Paper, Grid } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Articles from "../modules/Articles";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state);
  const navigate = useNavigate();
  const [articles, setArticles] = useState();

  const fetchArticles = async () => {
    debugger;
    const data = await Articles.index(currentUser);
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const userArticles = articles.map((article) => {

    return (
      <>
    <div>{article.title}</div>
    <div>{article.teaser}</div>
    <div>{article.published}</div>
    
      </>
    )

  })

  return (
    <Paper elevation={3} sx={{ maxWidth: 700 }}>
      <Typography
        variant="h6"
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
