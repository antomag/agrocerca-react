import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
//css
import './Card.css'

export default function ActionAreaCard({datos}) {
  const { titulo, descripcion, img, categoria, subcategoria, id } = datos
  return (
    <Card className='StyleCard'>
      <Link to={`/productos/${categoria}/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={`/img/${img}`}
            alt="-"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {categoria}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subcategoria}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}