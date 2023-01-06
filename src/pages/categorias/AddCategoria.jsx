
import React, { useState, useEffect} from 'react';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getAllCategorias, guardarCategorias } from '../../services/CategoriaService'

const AddCategoria = () => {


 
 const [nombreCategoria, setNombreCategoria] = useState("");
 const [valorCaja, setValorCaja] = useState("");
 const [fecha, setFecha] = useState("");

 const nuevaCategoria = (e) => {
    e.preventDefault();
    const categoria = {nombreCategoria, valorCaja, fecha}
    console.log(categoria)
    guardarCategorias(categoria)
 }

    const [value, setValue] = React.useState(null);

    


  return (
    <div className="App">
<div className='app-nav'> <Navbar /> </div>

  <div className='main-container'>
    <aside className='app-side'>
    <Sidebar />
    </aside>
    <main className='main' >
       
        <div className='main-info'>
        <form class="row g-3" onSubmit={(e) => nuevaCategoria(e)}>
  <div class="col-auto">
    <label htmlFor='nombreCategoria'class="">Ingrese Datos de Categorías</label>
    <input type="text" readonly class="form-control" id="nombreCategoria"  placeholder="Nombre categoría" name='nombreCategoria' value={nombreCategoria} onChange={(e) => setNombreCategoria(e.target.value)}/>
  </div>
  <div class="col-auto">
    <label htmlFor='valor_caja' class="visually-hidden">Valor</label>
    <input type='number' class="form-control" id="valor" placeholder="valor por caja"  name='valorCaja' value={valorCaja} onChange={(e) => setValorCaja(e.target.value)} />
  </div>
  <br />
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="ingrese fecha"
        value={fecha}
        onChange={(e) => {
          setFecha(e);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3" >Guardar datos</button>
  </div>
</form>
        
        </div>
    </main>
    
  </div>
</div>
  )
}

export default AddCategoria

