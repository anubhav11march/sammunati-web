import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cardImage from "../../Assets/Images/cardImage.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import "../../Assets/Css/blog.css"

export default function BlogCard(props) {
  const navigate = useNavigate();
  return (
    // <Card className="me-4 mb-4"  sx={{ maxWidth: 250 }} onClick={()=>navigate('/blogs/123')} style={{cursor:"pointer",backgroundColor:"rgba(241, 244, 247, 1)"}}>
    <Card
      className="me-4 mb-4"
      sx={{ maxWidth: 250 }}
      style={{ cursor: "pointer", backgroundColor: "rgba(241, 244, 247, 1)" }}
    >
      <div
        onClick={() => {
          navigate(`/blogs/${props.item._id}`);
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="160"
          image={props.item.thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="blog-card-description">
            {props.item.content}
          </Typography>
        </CardContent>
      </div>
      <CardActions className="d-flex w-100">
        {/* <Button size="small text-dark d-flex align-items-center">
          <FavoriteBorderIcon /> <p className="ps-2">{props.item.likes}</p>
        </Button> */}
        <Button size="small text-dark  align-self-flex-end">
          <ShareIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
