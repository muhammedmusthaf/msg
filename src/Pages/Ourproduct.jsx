import { useState } from 'react';
import '../styles/Product.css';
import { Link } from 'react-router-dom';

const productImages = [
  { id: 1, name: 'Pipe',  image: 'assets/pipe.avif',link:'/pipes' },
  { id: 2, name: 'Strainers',  image: 'assets/strainer.jpg',link:'/strainers' },
  { id: 3, name: 'Valves',  image: 'assets/valves.jpg',link:'/valves'},
  { id: 4, name: 'Flanges', image: 'assets/flange.png',link:'/flanges' },
  { id: 5, name: 'Pipe Fittings', image: 'assets/fit.jpg',link:'/pipefitting' },
  { id: 6, name: 'Plates', image: 'assets/plate.webp',link:'/plates' },
];

function Ourproduct() {
  const [isAnimated, setIsAnimated] = useState(true);

  return (
    <div className="product-container">
      {/* Header */}
      <header className="product-header">
        <h1>Our Products</h1>
      </header>

      {/* Product Cards */}
      <div className={`product-grid ${isAnimated ? 'animated' : ''}`}>
        {productImages.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="card-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={product.link} className="learn-more-btn">Learn More</Link>
            </div>
            <div className="card-overlay"></div>
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default Ourproduct;