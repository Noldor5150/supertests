import React from 'react';
import './index.css';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

function ProductsListHead({ keys }) {
  const [first, , third, fourth, fifth, sixth, seventh, eigth, ninth] = keys;
  return (
    <TableHead>
      <TableRow>
        <TableCell>{first}</TableCell>
        <TableCell align="justify">{third}</TableCell>
        <TableCell align="justify">{fourth}</TableCell>
        <TableCell align="justify">{fifth}</TableCell>
        <TableCell align="justify">{sixth}</TableCell>
        <TableCell align="justify">{eigth}</TableCell>
        <TableCell align="justify">{ninth}</TableCell>
        <TableCell align="justify">{seventh}</TableCell>
        <TableCell align="justify">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default ProductsListHead;
