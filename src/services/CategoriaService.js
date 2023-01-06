import axios from "axios";

const rutaBase = "http://localhost:8080/api3/";


const getAllCategorias = async() => {
    const respuesta = await axios.get(rutaBase + 'listar/categorias');
    console.log(respuesta.data)
    return respuesta.data;
}

const guardarCategorias = async(categoria) => {
    const respuesta = await axios.post(rutaBase + 'guardar/categoria', categoria);
    return respuesta.data;
}

const obtenerCategoria = async(categoriaId) => {
    const respuesta = await axios.get(rutaBase + 'obtener/categoria/' + categoriaId)
    return respuesta.data
}

const actualizarCategoria = async (categoriaId, categoria) => {
    const respuesta = await axios.put(rutaBase + 'actualizar/categoria/' + categoriaId, categoria )
    return respuesta.data;
}

const borrarCategoria = async (categoriaId) => {
    const respuesta = await axios.delete(rutaBase +'eliminar/categoria?id=' + categoriaId);
    return respuesta.data;
}


export { getAllCategorias, guardarCategorias, obtenerCategoria, actualizarCategoria, borrarCategoria };