import React from 'react';

const ProductPage = async ({ params }: { params: Promise<{ pid: string }> }) => {
    const { pid } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${pid}`);
    const product = await res.json();

    return (
        <div>
            <div className="max-w-3xl mx-auto p-5">
                <div className="card bg-base-100 shadow-xl border border-base-300">

                    <figure>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-72 object-cover"
                        />
                    </figure>

                    <div className="card-body">

                        <h2 className="card-title text-3xl">
                            {product.name}
                        </h2>

                        <p>{product.description}</p>

                        <div className="flex gap-2 flex-wrap">
                            {product.muscleGroups.map((muscle: string, index: number) => (
                                <span key={index} className="badge badge-primary">
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="divider">Exercise Information</div>

                        <div className="grid grid-cols-2 gap-4">
                            <p>Difficulty: {product.difficulty}</p>
                            <p>Duration: {product.duration} min</p>
                            <p>Calories: {product.caloriesBurned}</p>
                            <p>Sets: {product.sets}</p>
                            <p>Reps: {product.reps}</p>
                            <p>Rating: ⭐ {product.rating}</p>
                            <p className="col-span-2">Equipment: {product.equipment}</p>
                        </div>

                        <div className="divider">Instructions</div>

                        <ol className="list-decimal pl-5 space-y-2">
                            {product.instructions.map((step: string, index: number) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>

                        <button className="btn btn-primary mt-4">
                            Purchase Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;