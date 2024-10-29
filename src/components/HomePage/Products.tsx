"use server";
import Image from "next/image";

const products = [
  {
    name: "Modern Ceramic Vase",
    units: "500",
    status: "Available",
    image:
      "https://res.cloudinary.com/oyerotech-herokuapp-com/image/upload/v1730195183/clay-flagons-and-vase-on-color-background_w0eynb.webp",
  },
  {
    name: "Eco-Friendly Wooden Bowl",
    units: "600",
    status: "Available",
    image:
      "https://res.cloudinary.com/oyerotech-herokuapp-com/image/upload/v1730195206/homemade-lentil-brown-rice-salad_bew8kf.webp",
  },
  {
    name: "Handcrafted Clay Plate",
    units: "700",
    status: "Available",
    image:
      "https://res.cloudinary.com/oyerotech-herokuapp-com/image/upload/v1730195221/top-view-of-ceramic-dishes-in-working-process-handcrafted-pottery_ugsfcu.webp",
  },
  {
    name: "Artisan Glass Jar",
    units: "700",
    status: "Available",
    image:
      "https://res.cloudinary.com/oyerotech-herokuapp-com/image/upload/v1730195232/young-woman-smiling-buying-healthy-artisanal-food-at-small-local-store_j4daqa.webp",
  },
];

export const Products = () => {
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
