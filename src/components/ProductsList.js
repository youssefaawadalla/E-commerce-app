import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const storeItems = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(storeItems)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>

      <div className="container">
        <div className="row gy-4">
          {products.map((product) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={product.id}
              >
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
