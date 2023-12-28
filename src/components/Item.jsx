import React from 'react';

function Item({ product, addToCart }) {
  const { id, name, price, description, image } = product;

  const getImagePath = (imageName) => {
    return `../assets/${imageName}`;
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="item-container">
      <img src={getImagePath(image)} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default Item;
