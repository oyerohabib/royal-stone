export const Products = () => {
  const products = [
    { name: "Investment 1", price: "$500", status: "Available" },
    { name: "Investment 2", price: "$600", status: "Available" },
    { name: "Investment 3", price: "$700", status: "Available" },
  ];

  return (
    <section className="py-16 px-4 bg-green-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Latest Investment Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-green-600">{product.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
