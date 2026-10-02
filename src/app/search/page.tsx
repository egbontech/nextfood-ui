import FrontendLayout from "@/components/layouts/FrontendLayout";
import Image from "next/image";
import {  FiPlus,  FiStar } from "react-icons/fi";

const searchQuery = "pasta";

const results = [
  {
    name: "Creamy Alfredo Pasta",
    description:
      "Creamy pasta tossed with parmesan, herbs, and a rich garlic sauce.",
    price: 12.99,
    image: "/images/pasta.jpg",
    category: "Pasta",
    restaurant: "Fresh Bowl",
    rating: 4.9,
  },
];

export default function SearchPage() {
  return (
    <FrontendLayout>
      <main className="min-h-screen pb-16">
        {/* Header */}
        <section className="mx-auto max-w-7xl pt-10">
          <p className="text-sm font-medium text-primary">Search results</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Results for "{searchQuery}"
          </h1>

          <p className="mt-2 text-sm text-muted sm:text-base">
            Find delicious meals and dishes that match your search.
          </p>
        </section>

        {/* Results */}
        <section className="mx-auto mt-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-muted">
                {results.length} results found
              </p>

              <h2 className="mt-1 text-2xl font-bold text-text sm:text-3xl">
                Food you'll love
              </h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-background">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs font-medium text-orange-600 shadow-sm">
                    <FiStar size={12} className="fill-current" />
                    {item.rating}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <div>
                    <h3 className="font-semibold text-text transition group-hover:text-primary">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-muted">{item.restaurant}</p>
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>

                    <button
                      type="button"
                      aria-label={`Add ${item.name} to cart`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-hover"
                    >
                      <FiPlus size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </FrontendLayout>
  );
}
