import Product from "./Product.jsx"
import axios from "axios";
import React, { useEffect } from 'react'
import { useState } from "react";


function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://fakestoreapi.com/products");
      // console.log(result.data);
      setProducts(result.data);
    }
    fetchData();
  }, []);

  return (
    <>

      <div id='products'>
        {
          products.length > 0 ? (
            products.map((product) => {
              return (
                <Product key={product.id}
                  product={product} />
              )
            })) : ""

        }
      </div>
    </>
  )
}

export default Products