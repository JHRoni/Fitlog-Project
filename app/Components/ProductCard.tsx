import React from 'react';
import { ProductType } from './typeproduct';
import Link from 'next/link';
const ProductCard = ({ product }: { product: ProductType }) => {
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{product.name}</h2>
          <div className="badge badge-secondary">
            {product.difficulty}
          </div>
        </div>

        <p>{product.description}</p>

        <div className="flex flex-wrap gap-2">
          {product.muscleGroups.map((muscle, index) => (
            <span key={index} className="badge badge-outline">
              {muscle}
            </span>
          ))}
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <p>⏱️ Duration: {product.duration} min</p>
          <p>🔥 Calories: {product.caloriesBurned}</p>
          <p>🏋️ Sets: {product.sets}</p>
          <p>🔁 Reps: {product.reps}</p>
          <p>⭐ Rating: {product.rating}</p>
          <p>Equipment: {product.equipment}</p>
        </div>

        <div className="card-actions justify-end mt-3">
          <Link href={`/blogs/${product.id}`} className="btn btn-primary">
              View Details
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ProductCard;