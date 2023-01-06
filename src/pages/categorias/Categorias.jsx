import { id } from 'date-fns/locale';
import React, { useState, useEffect} from 'react';
import { Link, } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';


import { getAllCategorias, borrarCategoria } from '../../services/CategoriaService'



const Categorias = () => {

  const categoriaInicial = [
    {
           nombreCategoria: "",
           valorCaja: ""
    }
];

const [state, setState] = useState(categoriaInicial);

const [nombreCategoria, setNombreCategoria] = useState("");
const [valorCaja, setValorCaja] = useState("");
const [fecha, setFecha] = useState("");

const obtenerCategorias = async() => {
      setState(await getAllCategorias());
  }


  
useEffect(
      () => {obtenerCategorias()}, []
  );



  // Eliminación de Categoria
  const eliminarCategoria = (categoriaId) => {
    borrarCategoria(categoriaId).then((response) => {
      obtenerCategorias();
    }).catch(error => {
      console.log(error)
    })
  }

    return (
    <div className="App">
    <div className='app-nav'> <Navbar /> </div>
    
      <div className='main-container'>
        <aside className='app-side'>
        <Sidebar />
        </aside>
        <main className='main' >

       <Link to='/addcategorias'><button className="btn btn-success">Agregar Categoria</button></Link>
<table className="table  tabla-personal">
              
              <thead className='cabeza-tabla'>
                     <tr className='columnas-tabla'>
                     <th scope="col">#</th>
                     <th scope="col">nombre categoria</th>
                     <th scope="col">valor</th>
                     <th scope="col"></th>
                </tr>
              </thead>
              <tbody>

  {
            state.map(categoria =>
        <tr key={categoria.id}>
      
      <td>{categoria.id}</td>
      <td>{categoria.nombreCategoria}</td>
      <td>{categoria.valorCaja}</td>
     <td className='td-botones '><div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary me-md-2 boton-actualizar" type="button">Actualizar</button>
      <button class="btn btn-primary boton-eliminar" type="button" onClick = {() => eliminarCategoria(categoria.id)}>Eliminar</button>
</div></td>
    </tr>
    

                
                )
        }



  </tbody>
</table>
            
        </main>
        
           </div>
           </div>
    );


}


export default Categorias