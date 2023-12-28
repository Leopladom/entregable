
import React from 'react';
import Item from './Item';

function ItemList({ products, addToCart }) {
  return (
    <div className="item-list" id="top"> {/* Agregamos un ID para anclar al inicio */}
      <h1>Lista de Productos</h1>
      <br />
      <ul>
        {products.map((product) => (
          <Item key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
