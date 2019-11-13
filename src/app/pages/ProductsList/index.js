import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Button,
  TextField
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ProductsListHead from "../../components/ProductsListHead";

function ProductsList({
  error,
  products = [],
  toggleActive,
  deleteProduct,
  enableEdit,
  handlePrice,
  handleQuantity,
  saveEditedFromList
}) {
  const keys = Object.keys(products[0]);
  // let inputQuantity = null;
  // let inputPrice = null;
  // function handleQuantityChange(event) {
  //   inputQuantity = event.target.value;
  //   console.log(inputQuantity);
  // }
  // function handlePriceChange(event) {
  //   inputPrice = event.target.value;
  //   console.log(inputPrice);
  // }

  return error ? (
    <div>{error} </div>
  ) : (
    <Paper>
      <Table aria-label="simple table">
        <ProductsListHead keys={keys} />
        <TableBody>
          {products.map(
            ({
              name,
              id,
              ean,
              type,
              weight,
              color,
              isActive,
              quantity,
              price,
              isEdit
            }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="justify">{ean}</TableCell>
                <TableCell align="justify">{type}</TableCell>
                <TableCell align="justify">{weight}</TableCell>
                <TableCell align="justify">{color}</TableCell>
                <TableCell align="justify" style={{ width: "12%" }}>
                  <TextField
                    key="id"
                    type="number"
                    margin="none"
                    defaultValue={quantity}
                    onChange={() => {
                      handleQuantity(id);
                    }}
                    onClick={() => {
                      enableEdit(id);
                    }}
                  />
                </TableCell>
                <TableCell align="justify" style={{ width: "12%" }}>
                  <TextField
                    key="id"
                    type="number"
                    margin="none"
                    defaultValue={price}
                    onChange={() => {
                      handlePrice(id);
                    }}
                    onClick={() => {
                      enableEdit(id);
                    }}
                  />
                </TableCell>
                <TableCell align="justify">
                  <Checkbox
                    color="primary"
                    onChange={() => {
                      toggleActive(id);
                    }}
                    checked={isActive}
                    value="isActive"
                  />
                </TableCell>
                <TableCell align="justify">
                  <Link to={`/products/${id}`}>
                    <Button variant="contained">view</Button>
                  </Link>
                  {isEdit ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        console.log(id);

                        saveEditedFromList(id);
                        console.log(id);
                      }}
                    >
                      save
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary">
                      edit
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      deleteProduct(id);
                    }}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ProductsList;
