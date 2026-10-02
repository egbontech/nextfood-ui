import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaStar } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const restaurants = [
  {
    id: 1,
    name: "Fresh Bowl",
    image: "/images/fresh-bowl.jpg",
    cuisine: "Healthy, Salads",
    rating: 4.9,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    location: "Green Avenue",
    isOpen: true,
  },
  {
    id: 2,
    name: "Pasta Corner",
    image: "/images/pasta-corner.jpg",
    cuisine: "Italian, Pasta",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    location: "Oak Street",
    isOpen: false,
  },
  {
    id: 3,
    name: "Golden Wok",
    image: "/images/golden-wok.jpg",
    cuisine: "Chinese, Noodles",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 2.49,
    location: "Main Street",
    isOpen: true,
  },
  {
    id: 4,
    name: "Sweet Cravings",
    image: "/images/sweet-cravings.jpg",
    cuisine: "Desserts, Bakery",
    rating: 4.8,
    deliveryTime: "15-25 min",
    deliveryFee: 1.99,
    location: "Park Road",
    isOpen: true,
  },
];

export default function RestaurantsAdminPage() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text sm:text-3xl">
            Restaurants
          </h1>

          <p className="mt-1 text-sm text-muted">
            Manage restaurants on your food ordering platform.
          </p>
        </div>

        <Link
          href="/admin/restaurants/new"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          <FaPlus size={13} />
          Add Restaurant
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border border-border bg-card lg:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-background text-left text-xs font-medium uppercase tracking-wide text-muted">
                <th className="px-5 py-4">Restaurant</th>
                <th className="px-5 py-4">Cuisine</th>
                <th className="px-5 py-4">Rating</th>
                <th className="px-5 py-4">Delivery</th>
                <th className="px-5 py-4">Fee</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {restaurants.map((restaurant) => (
                <tr
                  key={restaurant.id}
                  className="transition hover:bg-background/60"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-background">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-text">
                          {restaurant.name}
                        </p>

                        <p className="mt-1 text-xs text-muted">
                          {restaurant.location}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-muted">
                    {restaurant.cuisine}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-text">
                      <FaStar
                        size={13}
                        className="text-accent"
                      />
                      {restaurant.rating}
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-muted">
                    {restaurant.deliveryTime}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-text">
                    ${restaurant.deliveryFee.toFixed(2)}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        restaurant.isOpen
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {restaurant.isOpen ? "Open" : "Closed"}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      aria-label={`Delete ${restaurant.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-red-50 hover:text-error"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile / Tablet Cards */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="rounded-xl border border-border bg-card p-4"
          >
            <div className="flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-background">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold text-text">
                      {restaurant.name}
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                      {restaurant.cuisine}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                      restaurant.isOpen
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {restaurant.isOpen ? "Open" : "Closed"}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <FaStar
                      size={12}
                      className="text-accent"
                    />
                    {restaurant.rating}
                  </span>

                  <span>{restaurant.deliveryTime}</span>

                  <span>
                    ${restaurant.deliveryFee.toFixed(2)} delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <p className="text-xs text-muted">
                {restaurant.location}
              </p>

              <button
                type="button"
                aria-label={`Delete ${restaurant.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-red-50 hover:text-error"
              >
                <FiTrash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}