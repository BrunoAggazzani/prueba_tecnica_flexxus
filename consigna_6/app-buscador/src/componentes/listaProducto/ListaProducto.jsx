import React, { useState, useEffect } from 'react';
import './listaProducto.css'

const ListaProducto = ({ productos }) => {
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setProductList(productos);
            setLoading(false);
        }, 3000); // Simular un tiempo de respuesta de 3 segundos
    }, [productos]);

    return (
        <div className="card-container">
            {loading ? (
                <p className='esperar'>Cargando productos...</p>
            ) : (
                productList.map((producto) => (
                    <div key={producto.id} className="card">
                        <div className="card-content">
                            <div className="image-container">
                                <img src={producto.imagen} alt={producto.nombre} />
                            </div>
                            <div className="text-container">
                                <h3>{producto.nombre}</h3>
                                <p>Código: {producto.codigo}</p>
                                <p>Precio: {producto.precio}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ListaProducto;
