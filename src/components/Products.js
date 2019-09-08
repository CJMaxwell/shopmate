import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

import ProductItem from '../components/ProductItem';


class Products extends Component {
  
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    console.log(this.props.products.rows);
    const { rows: products } =  this.props.products;
    return (
      <div className="row">
        { products && products.map(product => <ProductItem key={product.product_id} name={product.name} thumbnail={product.thumbnail} description={product.description}/> )}
      </div>
    )
  }
}

Products.prototypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.productItems,
})
export default connect(mapStateToProps, { fetchProducts })(Products)