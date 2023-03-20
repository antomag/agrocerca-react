import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
//firebase
import db from "../../firebase";
import { addDoc, collection } from 'firebase/firestore';

export default function FormDialog() {
  /* ABRIR Y CERRAR MODAL */
  const [open, setOpen] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /* - */

  const [news, setNews] = useState({email: ''})
  const [success, setSuccess] = useState()

  const addNews = () => {
    let prevNewsletter = {
      ...news
    }
    setOpen(false);
    pushEmail(prevNewsletter)
  }

  const pushEmail = async (prevNewsletter) => {
    const newsletterFirebase = collection(db, 'newsletter')
    const newsletterDoc = await addDoc(newsletterFirebase, prevNewsletter)
    setSuccess(newsletterDoc.id)
  }

  /* cambia cuando se completa el campo */
  const handleChange = (e) => {
    setNews({ 
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      <Button variant="contained" sx={{ my: 2, backgroundColor: '#ab9573'}} onClick={handleClickOpen}>
        NEWSLETTER
      </Button>
        {
          success ? 
          (
            <Alert severity="success">Pronto tendra novedades en su email! GRACIAS!</Alert>
          ) :
          (
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>SUSCRIBIRTE!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Para suscribirse a este sitio web, por favor ingrese su dirección de correo electrónico aquí.
                Enviaremos actualizaciones de vez en cuando.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                name= 'email'
                onChange={handleChange}
                value={news.email}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={addNews} >Suscribir</Button>
            </DialogActions>
          </Dialog>
          )
        } 
        
    </div>
  );
}
