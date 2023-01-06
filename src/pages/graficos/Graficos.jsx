import { blue, red } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
//import {  getAllCategorias } from '../../services/CategoriaService'
import axios from 'axios';




const Graficos = () => {
  const categoriaInicial = [
    {
      nombreCategoria: "",
      valorCaja: ""
    }
  ];

const [state, setState] = useState(categoriaInicial);
const [nombreCategoria, setNombreCategoria] = useState("");
const [valorCaja, setValorCaja] = useState("");
const rutaBase = "http://localhost:8080/api3/";

const data = {
  Labels: nombreCategoria,
  datasets: [{
    label: "valorCaja",
    backgroundColor: red,
    borderColor: red,
    borderWidth: 1,
    hoverBackgroundColor: blue,
    data: valorCaja

  }]
}

const opciones = {
	maintainAspectRatio: false,
	responsive: true

}


const getAllCategorias = async() => {
  await axios.get(rutaBase + 'listar/categorias')
  .then(response => {
    const respuesta = response.data;
    console.log(respuesta.data)
    const auxNombre= [], auxValor = [];
    respuesta.map(categoria => {
      auxNombre.push(categoria.nombreCategoria);
      auxValor.push(categoria.valorCaja);
    });
    setNombreCategoria(auxNombre);
    setValorCaja(auxValor);
  }, [])  
}

useEffect(
    () => {getAllCategorias()}, []
  );
  
  return (
    <div>
      <h2>Categorías</h2>
      <Bar data={data} options= {opciones} />
    </div>
  )
}

export default Graficos