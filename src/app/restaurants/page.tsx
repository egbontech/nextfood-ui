import FrontendLayout from "@/components/layouts/FrontendLayout";
import Image from "next/image";
import Link from "next/link";
import {
  FiClock,
  FiMapPin,
  FiSearch,
  FiStar,
} from "react-icons/fi";

const restaurants = [
    {
    name: "Fresh Bowl",
    image: "/images/fresh-bowl.jpg",
    cuisine: "Healthy, Salads",
    rating: 4.9,
    deliveryTime: "15-25 min",
    deliveryFee: "$2.49",
    location: "Green Avenue",
    isOpen: true,
  },
  {
    name: "Pasta Corner",
    image: "/images/pasta-corner.jpg",
    cuisine: "Italian, Pasta",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    location: "Oak Street",
    isOpen: false,
  },
  {
    name: "Golden Wok",
    image: "/images/golden-wok.jpg",
    cuisine: "Chinese, Noodles",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    location: "Main Street",
    isOpen: true,
  },
  {
    name: "Sweet Cravings",
    image: "/images/sweet-cravings.jpg",
    cuisine: "Desserts, Bakery",
    rating: 4.8,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    location: "Park Road",
    isOpen: true,
  }
  
];



export default function RestaurantsPage() {
  return (
   <FrontendLayout>
     <main className="min-h-screen  py-10 ">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-primary">
          Discover great food
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
          Restaurants
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Discover delicious meals from your favorite local restaurants and
          have them delivered straight to your door.
        </p>
      </div>

     

      {/* Restaurant Header */}
      <div className="mt-10 ">
        <div>
          <h2 className="text-xl font-bold text-text sm:text-2xl">
            Restaurants
          </h2>

          <p className="mt-1 text-sm text-muted">
            {restaurants.length} restaurants available
          </p>
        </div>

       
      </div>

      {/* Restaurant Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.name}
            href={`/restaurants/${restaurant.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            className="group overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden bg-background">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Status */}
              <div className="absolute left-3 top-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    restaurant.isOpen
                      ? "bg-white text-green-600"
                      : "bg-black/70 text-white"
                  }`}
                >
                  {restaurant.isOpen ? "Open" : "Closed"}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-text transition group-hover:text-primary">
                    {restaurant.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    {restaurant.cuisine}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex shrink-0 items-center gap-1 rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600">
                  <FiStar size={12} className="fill-current" />
                  {restaurant.rating}
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
                <div className="flex items-center gap-1.5">
                  <FiClock size={14} />
                  {restaurant.deliveryTime}
                </div>

                <div className="flex items-center gap-1.5">
                  <FiMapPin size={14} />
                  {restaurant.location}
                </div>
              </div>

              <div className="mt-3 border-t border-border pt-3 text-xs text-muted">
                Delivery fee{" "}
                <span className="font-medium text-text">
                  {restaurant.deliveryFee}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
   </FrontendLayout>
  );
}
