import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import './Filter.css'

export default function BotonesFiltro() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
        marginTop:'2%',
        fontSize:'1%'
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button><Link to={`/productos/Proteccion`} className='botonesFiltro'>PROTECCION</Link></Button>
        <Button><Link to={`/productos/Semillas`} className='botonesFiltro'>SEMILLAS</Link></Button>
        <Button><Link to={`/productos/Fertilizante`} className='botonesFiltro'>FERTILIZANTES</Link></Button>
        <Button><Link to={`/productos/Inoculante`} className='botonesFiltro'>INOCULANTES</Link></Button>
      </ButtonGroup>
    </Box>
  );
}
