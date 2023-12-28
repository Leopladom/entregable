import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';

function Cart({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) {
  const [datosTarjeta, setDatosTarjeta] = useState({
    numeroTarjeta: '',
    fechaVencimiento: '',
    cvv: '',
    cbu: '',
    nombreDestinatario: '',
    completado: false,
  });

  const [totalCarrito, setTotalCarrito] = useState(0);

  // Calcula el total del carrito automáticamente
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCarrito(total);
  }, [cartItems]);

  const handleFinalizarCompra = () => {
    if (datosTarjeta.completado && totalCarrito > 0) {
      console.log('Compra finalizada con éxito');
      // Aquí puedes agregar lógica adicional para finalizar la compra, realizar pagos, etc.
    } else {
      alert('Por favor, complete los detalles del método de pago correctamente y asegúrese de tener elementos en el carrito.');
    }
  };

  return (
    <div className="cart" id="bottom" style={{ marginBottom: '180px' }}>
      <h2>Carrito de Compras</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <span>
              {item.name} - ${item.price}
            </span>
            <div className="quantity-buttons">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <br />
              <button onClick={() => removeItem(item.id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
      <br />
      {/* Mostrar el total del carrito */}
      <p>Total del Carrito: ${totalCarrito}</p>

      {/* Renderizar el formulario */}
      <Formulario
        datosTarjeta={datosTarjeta}
        setDatosTarjeta={setDatosTarjeta}
        totalCarrito={totalCarrito}
      />

      {/* Botón para finalizar la compra */}
      <div className="purchase-btn-container">
        <button className="purchase-btn" onClick={handleFinalizarCompra}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Cart;
