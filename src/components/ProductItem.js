import React from 'react';

const ProductItem = (props) => {
  return (
    <div className="col-md-4 card mt-1">
      <div className="card-img-top">
        <img src={`/img/images-feature6.png`} alt={props.name}/>
      </div>
      <div className="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <button className="call-to-action">Buy now</button>
      </div>
    </div>
  )
}

export default ProductItem;