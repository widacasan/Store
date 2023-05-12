import React from 'react';

const products = [
  {
    imgSrc: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Traveling',
    price: '$free',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Traveling',
    price: '$free',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Traveling',
    price: '$free',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Traveling',
    price: '$free',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Traveling',
    price: '$free',
  },
];

function ProductInfo({ name, price }) {
  return (
    <div>
      <p>{price}</p>
      <p>{name}</p>
    </div>
  );
}

function ProductCard({ imgSrc, name, price }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} />
      <div className="product-info">
        <ProductInfo name={name} price={price} />
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="" />
        </figure>
      </div>
    </div>
  );
}

function App() {
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

export default App;
