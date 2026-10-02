import FrontendLayout from "@/components/layouts/FrontendLayout";
import Image from "next/image";
import { 
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaMinus,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

const cartItems = [
  {
    id: 1,
    name: "Creamy Alfredo Pasta",
    image: "/images/pasta.jpg",
    price: 12.99,
    quantity: 1,
    restaurant: "Fresh Bowl",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    image: "/images/pizza.jpg",
    price: 14.99,
    quantity: 1,
    restaurant: "Pasta Corner",
  },
  {
    id: 3,
    name: "Chicken Noodles",
    image: "/images/noodles.jpg",
    price: 11.99,
    quantity: 1,
    restaurant: "Golden Wok",
  },
];

export default function CheckoutPage() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 2.49;
  const tax = subtotal * 0.02;
  const total = subtotal + deliveryFee + tax;

  return (
   <FrontendLayout>
       <main className="min-h-screen pb-16">
    

      <div className="mx-auto mt-8 grid  grid-cols-1 gap-6 md:px-16 lg:grid-cols-[1fr_380px] ">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Delivery Information */}
          <section className="rounded-xl border border-border bg-white">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF1E8] text-primary">
                <FaMapMarkerAlt size={16} />
              </div>

              <div>
                <h2 className="font-semibold text-text">
                  Delivery Information
                </h2>

                <p className="text-xs text-muted">
                  Where should we deliver your order?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-text"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-text"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-text"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-text"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+234 801 234 5678"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* Street */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="street"
                  className="text-sm font-medium text-text"
                >
                  Street Address
                </label>

                <input
                  id="street"
                  type="text"
                  placeholder="12 Green Avenue"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-text"
                >
                  City
                </label>

                <input
                  id="city"
                  type="text"
                  placeholder="Benin City"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* State */}
              <div>
                <label
                  htmlFor="state"
                  className="text-sm font-medium text-text"
                >
                  State
                </label>

                <input
                  id="state"
                  type="text"
                  placeholder="Edo"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label
                  htmlFor="zipcode"
                  className="text-sm font-medium text-text"
                >
                  Postal Code
                </label>

                <input
                  id="zipcode"
                  type="text"
                  placeholder="300001"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="text-sm font-medium text-text"
                >
                  Country
                </label>

                <input
                  id="country"
                  type="text"
                  placeholder="Nigeria"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>

              {/* Delivery Notes */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="notes"
                  className="text-sm font-medium text-text"
                >
                  Delivery Notes{" "}
                  <span className="font-normal text-muted">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Add instructions for the delivery driver..."
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
                />
              </div>
            </div>
          </section>

        

          {/* Order Items */}
          <section className="rounded-xl border border-border bg-white">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-semibold text-text">
                Your Order
              </h2>

              <p className="mt-1 text-xs text-muted">
                {cartItems.length} items in your order
              </p>
            </div>

            <div className="divide-y divide-border">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-5"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-background">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-medium text-text">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-muted">
                      {item.restaurant}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted transition hover:border-primary hover:text-primary"
                      >
                        <FaMinus size={10} />
                      </button>

                      <span className="w-5 text-center text-sm font-medium text-text">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted transition hover:border-primary hover:text-primary"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      type="button"
                      className="text-muted transition hover:text-error"
                      aria-label={`Remove ${item.name}`}
                    >
                      <FaTrash size={13} />
                    </button>

                    <p className="font-semibold text-text">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <aside>
          <div className="sticky top-6 rounded-xl border border-border bg-white">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-semibold text-text">
                Order Summary
              </h2>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex justify-between text-sm text-muted">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-muted">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-muted">
                <span>Tax (2%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-border" />

              <div className="flex items-center justify-between">
                <span className="font-semibold text-text">
                  Total
                </span>

                <span className="text-xl font-bold text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="rounded-lg bg-background p-3">
                <div className="flex items-start gap-2">
                  <FaMoneyBillWave
                    size={15}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <p className="text-xs leading-relaxed text-muted">
                    You will pay{" "}
                    <span className="font-semibold text-text">
                      ${total.toFixed(2)}
                    </span>{" "}
                    in cash when your order is delivered.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Place Order
              </button>

              <p className="text-center text-xs leading-relaxed text-muted">
                By placing your order, you agree to our terms and
                confirm that you will pay in cash upon delivery.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
   </FrontendLayout>
  );
}