import React, { useEffect, useState } from "react";

export default function ProductShowcase() {
  let [products, setProducts] = useState([]);
  let [activeColumn, setActiveColumn] = useState(null);

  let fetchProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchProducts().then((data) => {
      console.log(data); // تحقق من البيانات المسترجعة هنا
      setProducts(data.slice(0, 9));
    });
  }, []);

  let columnTitles = ["Maple Series", "Ebony Series", "Featured"];

  let columns = products.length ? [
    products.slice(0, 3),
    products.slice(3, 6),
    products.slice(6, 9),
  ] : [[], [], []];

  return (
    <div className="product-showcase">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="series-column">
          <h3 onClick={() => setActiveColumn(columnIndex === activeColumn ? null : columnIndex)}>
            {columnTitles[columnIndex]}
          </h3>
          {activeColumn === columnIndex && (
            <div>
              {column.map((product) => (
                <div key={product.id} className="product">
                  <div onClick={() => window.location.href = `/product/${product.id}`} style={{ cursor: 'pointer' }}>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <p style={{ fontSize: '24px', color: '#333333' }}>
                      {product.title}
                    </p>
                    <p style={{ fontSize: '28px', color: '#222222', marginTop: '-15px' }}>
                      {`Rp ${product.price}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="see-more-container">
        <div className="line"></div>
        <button className="see-more-button">See more</button>
        <div className="line"></div>
      </div>
    </div>
  );
}