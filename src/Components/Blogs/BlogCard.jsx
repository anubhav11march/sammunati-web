import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/Css/blog.css";

export default function BlogCard(props) {
    const [copy, setCopy] = useState(false);
    const navigate = useNavigate();
    const webUrl = window.location.origin;
    const copyLink = (id) => {
        setCopy(true);
        navigator.clipboard.writeText(`${webUrl}/blogs/${id}`);
        setTimeout(() => setCopy(false), 1500);
    };

    return (
        // <Card className="me-4 mb-4"  sx={{ maxWidth: 250 }} onClick={()=>navigate('/blogs/123')} style={{cursor:"pointer",backgroundColor:"rgba(241, 244, 247, 1)"}}>
        <Card
            className="me-4 mb-4"
            sx={{ maxWidth: 250 }}
            style={{
                cursor: "pointer",
                backgroundColor: "rgba(241, 244, 247, 1)",
            }}
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
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className="blog-card-description"
                    >
                        {props.item.content}
                    </Typography>
                </CardContent>
            </div>
            <CardActions className="d-flex w-100">
                {/* <Button size="small text-dark d-flex align-items-center">
          <FavoriteBorderIcon /> <p className="ps-2">{props.item.likes}</p>
        </Button> */}
                <Button
                    className={`${copy && "copied"}`}
                    onClick={() => copyLink(props.item._id)}
                    size="small text-dark  align-self-flex-end"
                >
                    <ShareIcon />
                </Button>
            </CardActions>
        </Card>
    );
}
