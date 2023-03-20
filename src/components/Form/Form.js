import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
//
import './Form.css'
import { Container, Button } from '@mui/material';

const currencies = [
    {
      value: 'Prod',
      label: 'Productor Agropecuario',
    },
    {
      value: 'Ing',
      label: 'Ingeniero Agronomo',
    },
    {
      value: 'Vendedor',
      label: 'Comerciante',
    },
];

export default function FormPropsTextFields() {
  const [currency, setCurrency] = React.useState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container>
      <fieldset className='form'>
        <h3 style={{textAlign:'center',textDecoration:'underline'}}>FORMULARIO DE REGISTRO</h3>
        <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div style={{display:'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center'}}>
                  <TextField
                  required
                  id="outlined-required"
                  label="Nombre y Apellido"
                />
                  <TextField
                  required
                  id="outlined-required"
                  label="Email"
                />
                  <TextField
                  id="outlined-password-input"
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  />
                  <TextField
                  id="outlined-select-currency"
                  select
                  label="Seleccione su tipo"
                  value={currency}
                  onChange={handleChange}
                  >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button>ENVIAR</Button>
              </div>
              
            </Box>
      </fieldset>
    </Container>
  );
}
