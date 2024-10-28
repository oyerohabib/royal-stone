import Image from "next/image";

export const Products = () => {
  const products = [
    {
      name: "Modern Ceramic Vase",
      units: "500",
      status: "Available",
      image:
        "https://media.istockphoto.com/id/1954362172/photo/clay-flagons-and-vase-on-color-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=petafOF8uK97xv5idk-P8aj8mHwkweafolGgT5iSUpo=",
    },
    {
      name: "Eco-Friendly Wooden Bowl",
      units: "600",
      status: "Available",
      image:
        "https://media.istockphoto.com/id/1463561971/photo/homemade-lentil-brown-rice-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=iBd8KygscmgwJPYmkYv7OaJeCM77G9WQbKE5NT8x8j0=",
    },
    {
      name: "Handcrafted Clay Plate",
      units: "700",
      status: "Available",
      image:
        "https://media.istockphoto.com/id/1461256525/photo/top-view-of-ceramic-dishes-in-working-process-handcrafted-pottery.webp?a=1&b=1&s=612x612&w=0&k=20&c=_7FRmbxkeLkaDXoNo8RpYxSL7evX9dd9OZnwF8QCPmU=",
    },
    {
      name: "Artisan Glass Jar",
      units: "700",
      status: "Available",
      image:
        "https://media.istockphoto.com/id/1313383992/photo/young-woman-smiling-buying-healthy-artisanal-food-at-small-local-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=0WE4vHUX_NMLm2ReOWtnzgHzR56DPdDWnUm5e46-3G8=",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 xl:px-24 w-full bg-secondary-green">
      <div className="container mx-auto">
        <h2 className="text-2xl xxs:text-3xl font-extrabold text-center mb-8">
          Our Latest Investment Products
        </h2>
        <div className="flex overflow-x-auto no-scrollbar gap-4">
          {products.map((product, index) => (
            <div key={index} className="w-full min-w-[250px] space-y-2">
              <Image
                src={product.image}
                alt="product"
                width={600}
                height={600}
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
