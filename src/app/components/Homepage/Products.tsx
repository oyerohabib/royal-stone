import Image from "next/image";

export const Products = () => {
  const products = [
    {
      name: "Pharetra diam vitae duis vash aliquet",
      units: "500",
      status: "Available",
      image: "/images/products.svg",
    },
    {
      name: "Pharetra diam vitae duis vash aliquet",
      units: "600",
      status: "Available",
      image: "/images/products.svg",
    },
    {
      name: "Pharetra diam vitae duis vash aliquet",
      units: "700",
      status: "Available",
      image: "/images/products.svg",
    },
    {
      name: "Pharetra diam vitae duis vash aliquet",
      units: "700",
      status: "Available",
      image: "/images/products.svg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 xl:px-24 w-full bg-secondary-green">
      <div className="container mx-auto">
        <h2 className="text-2xl xxs:text-3xl font-extrabold text-center mb-8">
          Our Latest Investment Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="p-4 space-y-2">
              <Image
                src={product.image}
                alt="product"
                width={300}
                height={200}
                className="w-full"
              />
              <h3 className="font-medium max-w-52">{product.name}</h3>
              <p className="text-gray-600">
                {product.units} Units.{" "}
                <span className="text-green-600">{product.status}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
