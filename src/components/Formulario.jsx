import React, { useState } from "react";

const Formulario = ({ setMetodoPago, datosTarjeta, setDatosTarjeta, totalCarrito }) => {
  const [metodoPago, setMetodoPagoSeleccionado] = useState("tarjeta");
  const [camposValidos, setCamposValidos] = useState(false);

  const handleMetodoPagoChange = (event) => {
    setMetodoPagoSeleccionado(event.target.value);
    setMetodoPago(event.target.value);
    setCamposValidos(false); // Resetear la validación al cambiar el método de pago
  };

  const handleDatosTarjetaChange = (event) => {
    const { name, value } = event.target;
    setDatosTarjeta((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const validarCampos = () => {
    if (metodoPago === "tarjeta") {
      setCamposValidos(
        datosTarjeta.numeroTarjeta.trim() !== "" &&
        datosTarjeta.fechaVencimiento.trim() !== "" &&
        datosTarjeta.cvv.trim() !== ""
      );
    } else if (metodoPago === "transferencia") {
      setCamposValidos(
        datosTarjeta.cbu.trim() !== "" &&
        datosTarjeta.nombreDestinatario.trim() !== ""
      );
    }
  };
  

  const handleFinalizarCompra = () => {
    validarCampos();
    if (camposValidos) {
      // Realizar acciones finales de compra aquí
      console.log('Compra finalizada con éxito');
    } else {
      alert('Por favor, complete los detalles del método de pago correctamente.');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ marginBottom: '10px' }}>Seleccione un método de pago:</h3>
      <br />
      <select onChange={handleMetodoPagoChange} value={metodoPago} style={{ marginBottom: '30px', width: '30%', padding: '8px' }}>
        <option value="tarjeta">Pago con tarjeta</option>
        <option value="transferencia">Transferencia</option>
      </select>

      {metodoPago === "tarjeta" && (
        <div>
          <input
            type="text"
            placeholder="Número de tarjeta"
            onChange={handleDatosTarjetaChange}
            name="numeroTarjeta"
            maxLength={16}
            style={{ marginBottom: '10px', width: '30%', padding: '8px' }}
          />
          <br />
          <input
            type="text"
            placeholder="Fecha de vencimiento (MM/YY)"
            onChange={handleDatosTarjetaChange}
            name="fechaVencimiento"
            maxLength={5}
            style={{ marginBottom: '10px', width: '30%', padding: '8px' }}
          />
          <br />
          <input
            type="text"
            placeholder="CVV"
            onChange={handleDatosTarjetaChange}
            name="cvv"
            maxLength={3}
            style={{ marginBottom: '10px', width: '30%', padding: '8px' }}
          />
        </div>
      )}

      {metodoPago === "transferencia" && (
        <div>
          <input
            type="text"
            placeholder="CBU del destinatario"
            onChange={handleDatosTarjetaChange}
            name="cbu"
            maxLength={22}
            style={{ marginBottom: '10px', width: '30%', padding: '8px' }}
          />
          <br />
          <input
            type="text"
            placeholder="Nombre del destinatario"
            onChange={handleDatosTarjetaChange}
            name="nombreDestinatario"
            maxLength={20}
            style={{ marginBottom: '10px', width: '30%', padding: '8px' }}
          />
        </div>
      )}

      

      <button className="purchase-btn" style={{ display: camposValidos ? 'block' : 'none' }} onClick={handleFinalizarCompra}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default Formulario;
