import React from 'react';
import { api } from '../lib/api';
import { ProductType } from './typeproduct';
import ProductCard from './ProductCard';

const AllProducts =({ allproducts }: { allproducts: ProductType[] }) => {
    return (
        <div>
            <h2>The Catalogs</h2>
            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
    {allproducts.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
</div>
        </div>
    );
};

export default AllProducts;