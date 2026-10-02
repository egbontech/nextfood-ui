import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const menuItems = [
  {
    id: 1,
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    restaurant: "Fresh Bowl",
    price: 12.99,
    available: true,
    image: "/images/pasta.jpg",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Pizza",
    restaurant: "Pasta Corner",
    price: 14.99,
    available: true,
    image: "/images/pizza.jpg",
  },
  {
    id: 3,
    name: "Chicken Noodles",
    category: "Noodles",
    restaurant: "Golden Wok",
    price: 11.99,
    available: true,
    image: "/images/noodles.jpg",
  },
 
  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    restaurant: "Sweet Cravings",
    price: 7.99,
    available: false,
    image: "/images/cakes.jpg",
  },
  
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text sm:text-3xl">
            Menu
          </h1>

          <p className="mt-1 text-sm text-muted">
            Manage your food menu and availability.
          </p>
        </div>

        <Link
          href="/admin/menu/new"
          className="flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
        >
          <FiPlus size={18} />
          Add Menu Item
        </Link>
      </div>

      {/* Menu Items */}
      <div className="mt-7 overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-semibold text-text">
            All Menu Items
            <span className="ml-2 text-sm font-normal text-muted">
              ({menuItems.length})
            </span>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-background text-left text-muted">
                <th className="px-5 py-3 font-medium">
                  Menu Item
                </th>

                <th className="px-5 py-3 font-medium">
                  Restaurant
                </th>

                <th className="px-5 py-3 font-medium">
                  Category
                </th>

                <th className="px-5 py-3 font-medium">
                  Price
                </th>

                <th className="px-5 py-3 font-medium">
                  Availability
                </th>

                <th className="px-5 py-3 text-right font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {menuItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-border last:border-0 hover:bg-background/60"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-background">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <span className="font-medium text-text">
                        {item.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-muted">
                    {item.restaurant}
                  </td>

                  <td className="px-5 py-4 text-muted">
                    {item.category}
                  </td>

                  <td className="px-5 py-4 font-medium text-text">
                    ${item.price.toFixed(2)}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        item.available
                          ? "font-medium text-success"
                          : "font-medium text-error"
                      }
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:border-error hover:text-error"
                        aria-label={`Delete ${item.name}`}
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List */}
        <div className="divide-y divide-border md:hidden">
          {menuItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-background">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-medium text-text">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    {item.restaurant}
                  </p>

                  <p className="mt-0.5 text-sm text-muted">
                    {item.category}
                  </p>

                  <div className="mt-1 flex items-center gap-3 text-sm">
                    <span className="font-medium text-primary">
                      ${item.price.toFixed(2)}
                    </span>

                    <span
                      className={
                        item.available
                          ? "text-success"
                          : "text-error"
                      }
                    >
                      {item.available
                        ? "Available"
                        : "Unavailable"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted transition hover:border-error hover:text-error"
                >
                  <FiTrash2 size={15} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

