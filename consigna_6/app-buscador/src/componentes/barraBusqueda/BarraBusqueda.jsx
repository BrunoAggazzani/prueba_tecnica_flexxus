import React, { useState } from 'react';
import './barraBusqueda.css'

const BarraBusqueda = ({ onBuscar }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleInputChange = (event) => {
        setBusqueda(event.target.value);
    };

    const handleBuscarClick = () => {
        onBuscar(busqueda);
    };

    return (
        <div className='contenedor-barra-busq'>
            <input type="text" value={busqueda} onChange={handleInputChange} />
            <button onClick={handleBuscarClick}>🔎 Buscar</button>
        </div>
    );
};

export default BarraBusqueda;

