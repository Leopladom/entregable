import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '105px', 
    
    
  };

  return (
    <div style={footerStyle}>
      <p>Contáctenos: <br />
      Teléfono: +54 03516221155 <br />
      Correo Electrónico: info@lplaza.com <br />
      Dirección: Calle Falsa 123 Ciudad Imaginaria</p>
    </div>
  );
};

export default Footer;
