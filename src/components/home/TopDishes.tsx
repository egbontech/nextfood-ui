import Image from "next/image";
import Link from "next/link";

const dishes = [
  {
    name: "Creamy Pasta",
    description: "Rich, creamy pasta tossed with fresh herbs and savory flavors.",
    price: 12.99,
    image: "/images/pasta.jpg",
  },
  {
    name: "Margherita Pizza",
    description: "Classic pizza topped with tomato, mozzarella, and fresh basil.",
    price: 14.99,
    image: "/images/pizza.jpg",
  },
  {
    name: "Chicken Noodles",
    description: "Stir-fried noodles with tender chicken and fresh vegetables.",
    price: 11.99,
    image: "/images/noodles.jpg",
  },
  {
    name: "Classic Cakes",
    description: "Soft and delicious cake with a rich, creamy finish.",
    price: 8.99,
    image: "/images/cakes.jpg",
  },
];

export default function TopDishes() {
  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-primary">
            Customer favorites
          </p>

          <h2 className="text-2xl font-bold text-text sm:text-3xl">
            Top Dishes
          </h2>
        </div>

        <Link
          href="/menu"
          className="hidden text-sm font-medium text-primary transition hover:text-primary-hover sm:block"
        >
          View All
        </Link>
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dishes.map((dish) => (
          <Link
            key={dish.name}
            href={`/menu/${dish.name.toLowerCase().replaceAll(" ", "-")}`}
            className="group overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-4/3 overflow-hidden bg-background">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-text transition group-hover:text-primary">
                {dish.name}
              </h3>

              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
                {dish.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  ${dish.price.toFixed(2)}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg text-white transition group-hover:bg-primary-hover">
                  +
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

