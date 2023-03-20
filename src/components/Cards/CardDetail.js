import { Container } from "@mui/material";
import React from "react";

export default function CardDetail() {
    return (
      <Container style={{textAlign:'center'}}>
        <h1>DETALLES DEL PRODUCTO</h1>
        <div style={{backgroundColor: '#f5f5f5', marginBottom:'5%'}}>
          <h2>Informacion Principal</h2>
          <p>Ciclo: Largo</p>
          <p>Presentacion: Bolsa</p>
          <h2>Descripcion</h2>
          <p>Maiz LG SRM 566 VT3P</p>
          <p>Cruzamiento: Simple</p>
          <p>Madurez relativa:125</p>
          <p>Días a floración:76</p>
          <p>Tipo y color de grano:Semidentado anaranjado</p>
          <p>Altura de planta (m):2,2</p>
          <p>Número de hileras:18/20</p>
        </div>
      </Container>
    );
}