import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ProductsList,
  PageNotFound,
  Create,
  Home,
  SingleProduct
} from "./pages";
import Layout from "./components/Layout";

class App extends React.Component {
  state = {
    products: [
      {
        name: "Alus",
        id: "1",
        ean: 1234567891012,
        type: "liquid",
        weight: 500,
        color: "brown",
        isActive: true,
        quantity: 10,
        price: 3,
        isEdit: false
      },
      {
        name: "Vynas",
        id: "2",
        ean: 1234567891013,
        type: "liquid",
        weight: 700,
        color: "red",
        isActive: false,
        quantity: 1,
        price: 7,
        isEdit: false
      },
      {
        name: "Sidras",
        id: "3",
        ean: 1234567891014,
        type: "liquid",
        weight: 1000,
        color: "eyellow",
        isActive: true,
        quantity: 7,
        price: 5,
        isEdit: false
      }
    ],
    error: null
  };

  toggleActive = id => {
    const { products } = this.state;
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isActive = !product.isActive;
      }
      return product;
    });
    this.setState({ products: changedProducts });
  };
  // enableEdit = id => {
  //   const { products } = this.state;
  //   console.log(products.filter(product => product.isEdit));
  //   if (products.filter(product => product.isEdit === true)) {
  //     this.setState({ products: products });
  //   } else {
  //     const changedProducts = products.map(product => {
  //       if (product.id === id) {
  //         product.isEdit = true;
  //       }
  //       return product;
  //     });
  //     this.setState({ products: changedProducts });
  //   }
  // };
  enableEdit = id => {
    const { products } = this.state;
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isEdit = true;
      }
      return product;
    });
    this.setState({ products: changedProducts });
  };

  deleteProduct = removeId => {
    this.setState(state => {
      return { products: state.products.filter(({ id }) => id !== removeId) };
    });
  };

  saveEditedFromList = (id, newQuantity, newPrice) => {
    const { products } = this.state;
    console.log(id, newQuantity, newPrice);
    const changedProducts = products.map(product => {
      if (product.id === id) {
        product.isEdit = false;
        product.quantity = newQuantity ? newQuantity : product.quantity;
        product.price = newPrice ? newPrice : product.price;
      }
      return product;
    });
    this.setState({ products: changedProducts });
  };
  render() {
    const { products, error } = this.state;
    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/products"
              exact
              render={() => (
                <ProductsList
                  products={products}
                  error={error}
                  // callbackFromParent={this.myCallback}
                  toggleActive={this.toggleActive}
                  deleteProduct={this.deleteProduct}
                  enableEdit={this.enableEdit}
                  saveEditedFromList={this.saveEditedFromList}
                />
              )}
            />
            <Route path="/" exact component={Home} />
            <Route path="/products/create" exact component={Create} />

            <Route
              path="/products/:id"
              exact
              render={props => {
                const { id } = props.match.params;
                const product =
                  products.find(product => product.id === id) || {};
                return <SingleProduct {...props} product={product} />;
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
