import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";

const ArticleCard = ({ article }) => {
  return (
    <Card data-cy="current-user-articles" sx={{ width: "100%", maxWidth: 700 }}>
      <CardActionArea>
        {article.image && (
          <CardMedia
            component="img"
            height="140"
            data-cy="article-image"
            image={article.image}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h3" data-cy="article-title">
            {article.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" data-cy="article-teaser">
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
