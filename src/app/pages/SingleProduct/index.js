import React from 'react';
import { Redirect } from 'react-router-dom';
import './index.scss';

function SingleProduct({ product }) {
  if (!product) {
    return <Redirect to="/products" />;
  }
  const { name, id, ean, type, weight, color, isActive, quantity, price } = product;
  return (
    <div className="SingleProduct">
      <p>name: {name}</p>
      <p>id: {id}</p>
      <p>ean: {ean}</p>
      <p>type: {type}</p>
      <p>weight: {weight}</p>
      <p>color: {color}</p>
      <p>isActive: {isActive}</p>
      <p>quantity: {quantity}</p>
      <p>price: {price}</p>
    </div>
  );
}

export default SingleProduct;
