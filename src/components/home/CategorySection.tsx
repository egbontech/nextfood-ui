import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Breakfast",
    image: "/images/breakfast.png",
  },
  {
    name: "Dessert",
    image: "/images/dessert.png",
  },
  {
    name: "Ice Cream",
    image: "/images/ice-cream.png",
  },
  {
    name: "Noodles",
    image: "/images/noodles.png",
  },
  {
    name: "Pasta",
    image: "/images/pasta.png",
  },
  {
    name: "Pizza",
    image: "/images/pizza.png",
  },
  {
    name: "Rolls",
    image: "/images/rolls.png",
  },
  {
    name: "Vegetables",
    image: "/images/vegetables.png",
  },
];

export default function Categories() {
  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="mb-8">
        <div>
          <p className="mb-1 text-sm font-medium text-primary">
            Explore our menu
          </p>

          <h2 className="text-2xl font-bold text-text sm:text-3xl">
            Browse by Category
          </h2>
        </div>

      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-8 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/menu?category=${category.name.toLowerCase()}`}
            className="group flex flex-col items-center"
          >
            {/* Image */}
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-background sm:h-24 sm:w-24">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
                sizes="96px"
              />
            </div>

            {/* Category Name */}
            <span className="mt-3 text-center text-sm font-medium text-text transition group-hover:text-primary">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}