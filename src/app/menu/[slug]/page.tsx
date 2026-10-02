import FrontendLayout from "@/components/layouts/FrontendLayout";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiClock,
  FiMapPin,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

const dish = {
  name: "Creamy Alfredo Pasta",
  description:
    "Creamy pasta tossed with parmesan, herbs, and a rich garlic sauce. A comforting and flavorful dish made with fresh ingredients and served with a smooth, creamy sauce.",
  price: 12.99,
  image: "/images/pasta.jpg",
  category: "Pasta",
  rating: 4.9,
  reviews: 120,
  restaurant: "Fresh Bowl",
  restaurantSlug: "fresh-bowl",
  deliveryTime: "15-25 min",
  location: "Green Avenue",
  deliveryFee: "$2.49",
};

const relatedDishes = [
  {
    name: "Vegetable Pasta",
    price: 10.99,
    image: "/images/vegetable-pasta.jpg",
    category: "Pasta",
    rating: 4.6,
    slug: "vegetable-pasta",
  },
  {
    name: "Chicken Noodles",
    price: 11.99,
    image: "/images/noodles.jpg",
    category: "Noodles",
    rating: 4.7,
    slug: "chicken-noodles",
  },
  {
    name: "Margherita Pizza",
    price: 14.99,
    image: "/images/pizza.jpg",
    category: "Pizza",
    rating: 4.8,
    slug: "margherita-pizza",
  },
];

export default function DishPage() {
  return (
    <FrontendLayout>
        <main className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl pt-8 md:px-16">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
        >
          <FiArrowLeft size={15} />
          Menu
        </Link>
      </section>

      {/* Dish Details */}
      <section className="mx-auto mt-6 max-w-7xl md:px-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="overflow-hidden rounded-2xlbg-white">
            <div className="relative aspect-square">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                priority
                className="object-cover"
              
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-primary">
              {dish.category}
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {dish.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-md bg-[#FFF7E6] px-2.5 py-1.5 text-sm font-medium text-orange-600">
                <FiStar size={14} className="fill-current" />
                {dish.rating}
              </div>

              <span className="text-sm text-muted">
                {dish.reviews}+ reviews
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-3xl font-bold text-primary">
              ${dish.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {dish.description}
            </p>

            {/* Restaurant */}
            <div className="mt-6 rounded-xl border border-border bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Restaurant
              </p>

              <Link
                href={`/restaurants/${dish.restaurantSlug}`}
                className="mt-2 block font-semibold text-text transition hover:text-primary"
              >
                {dish.restaurant}
              </Link>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <FiClock size={15} />
                  {dish.deliveryTime}
                </span>

                <span className="flex items-center gap-1.5">
                  <FiMapPin size={15} />
                  {dish.location}
                </span>
              </div>

              <p className="mt-2 text-xs text-muted">
                Delivery fee: {dish.deliveryFee}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-medium text-text">
                Quantity
              </p>

              <div className="mt-2 flex w-fit items-center rounded-lg border border-border bg-white">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center text-muted transition hover:text-primary"
                  aria-label="Decrease quantity"
                >
                  <FiMinus size={16} />
                </button>

                <span className="flex h-11 w-12 items-center justify-center border-x border-border text-sm font-medium text-text">
                  1
                </span>

                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center text-muted transition hover:text-primary"
                  aria-label="Increase quantity"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover sm:w-fit sm:min-w-60"
            >
              <FiShoppingBag size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </section>

    </main>
    </FrontendLayout>
  );
}