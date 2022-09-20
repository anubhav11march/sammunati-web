import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardImage from '../../Assets/Images/cardImage.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';

export default function BlogCard() {
  const navigate = useNavigate()
  return (
    <Card className="me-4 mb-4"  sx={{ maxWidth: 250 }} onClick={()=>navigate('/blogs/123')} style={{cursor:"pointer",backgroundColor:"rgba(241, 244, 247, 1)"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={cardImage}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className='d-flex w-100'>
        <Button size="small text-dark d-flex align-items-center"><FavoriteBorderIcon/> <p className='ps-2'>123</p></Button>
        <Button size="small text-dark  align-self-flex-end"><ShareIcon/></Button>
      </CardActions>
    </Card>
  );
}
