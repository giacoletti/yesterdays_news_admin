import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Articles from "../modules/Articles";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const { currentUser } = useSelector((state) => state);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    const data = await Articles.index(currentUser);
    setArticles(data.articles);
    console.log(articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const userArticles = articles.map((article) => {
    return (
      <Card sx={{ width: "100%", maxWidth: 700 }}>
        <CardActionArea onClick={() => navigate(`/article/create`)}>
          <CardContent>
            <Typography gutterBottom variant="h3" data-cy="article-title">
              {article.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              data-cy="article-teaser"
            >
              {article.teaser}
            </Typography>
            <Typography
              align="left"
              gutterBottom
              variant="caption"
              data-cy="article-created"
            >
              {article.published}
            </Typography>
            <Typography align="right" data-cy="article-author">
              {article.author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });

  return (
    <>
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
      <br></br>
      <Typography variant="h6">{`Your current articles:`}</Typography>
      <Grid>{userArticles}</Grid>
    </>
  );
};

export default Dashboard;
