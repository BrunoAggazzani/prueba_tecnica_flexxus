import React, { useState } from 'react';
import BarraBusqueda from './componentes/barraBusqueda/BarraBusqueda';
import ListaProducto from './componentes/listaProducto/ListaProducto';
import productosData from './datos/productos.json';
import './app.css'

function App() {
    const [productos, setProductos] = useState(productosData);
    
    const buscarProducto = (busqueda) => {
        // Lógica para filtrar productos según la búsqueda
        const productosFiltrados = productosData.filter(producto =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            producto.codigo.toLowerCase().includes(busqueda.toLowerCase())
        );
        setProductos(productosFiltrados);
    };

    return (
        <div className='container'>
            <BarraBusqueda onBuscar={buscarProducto} />
            <ListaProducto productos={productos} />
            <hr />            
            <span className='results'>{`${productos.length} resultados`}</span>            
        </div>
    );
}

export default App;
