import FrontendLayout from "@/components/layouts/FrontendLayout";
import {
  FiBox,
  FiCheckCircle,
  FiClock,
  FiTruck,
} from "react-icons/fi";

const orders = [
  {
    id: "NF-10482",
    orderDate: "October 1, 2026",
    status: "Out for Delivery",
    items: [
      {
        product: {
          name: "Creamy Alfredo Pasta",
        },
        quantity: 1,
      },
      {
        product: {
          name: "Fresh Vegetable Bowl",
        },
        quantity: 2,
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "12 Green Avenue",
      city: "Benin City",
      state: "Edo",
      zipcode: "300001",
      country: "Nigeria",
    },
    amount: 33.97,
    paymentType: "Card",
    isPaid: true,
  },
  {
    id: "NF-10451",
    orderDate: "September 29, 2026",
    status: "Delivered",
    items: [
      {
        product: {
          name: "Vegetable Pasta",
        },
        quantity: 1,
      },
      {
        product: {
          name: "Chocolate Cake",
        },
        quantity: 1,
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "12 Green Avenue",
      city: "Benin City",
      state: "Edo",
      zipcode: "300001",
      country: "Nigeria",
    },
    amount: 20.98,
    paymentType: "Cash on Delivery",
    isPaid: true,
  },
  {
    id: "NF-10396",
    orderDate: "September 25, 2026",
    status: "Processing",
    items: [
      {
        product: {
          name: "Chicken Noodles",
        },
        quantity: 2,
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "12 Green Avenue",
      city: "Benin City",
      state: "Edo",
      zipcode: "300001",
      country: "Nigeria",
    },
    amount: 26.47,
    paymentType: "Card",
    isPaid: true,
  },
];

export default function OrdersPage() {
  return (
    <FrontendLayout>
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">
            Your purchases
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-text md:text-3xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-muted">
            View your previous orders and check their status.
          </p>
        </div>

        {/* Orders */}
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="overflow-hidden rounded-xl border border-border bg-white"
            >
              {/* Order Header */}
              <div className="flex flex-col gap-3 border-b border-border bg-background px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FiBox size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text">
                      Order #{order.id}
                    </p>

                    <p className="text-xs text-muted">
                      Placed on {order.orderDate}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  {order.status === "Delivered" && (
                    <FiCheckCircle
                      className="text-success"
                      size={15}
                    />
                  )}

                  {order.status === "Out for Delivery" && (
                    <FiTruck
                      className="text-primary"
                      size={15}
                    />
                  )}

                  {order.status === "Processing" && (
                    <FiClock
                      className="text-accent"
                      size={15}
                    />
                  )}

                  <span
                    className={`text-sm font-medium ${
                      order.status === "Delivered"
                        ? "text-success"
                        : order.status === "Out for Delivery"
                          ? "text-primary"
                          : "text-accent"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Content */}
              <div className="grid gap-6 p-5 md:grid-cols-[1.5fr_1fr_1fr]">
                {/* Items */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-text">
                    Items
                  </h3>

                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background">
                          <FiBox
                            size={14}
                            className="text-primary"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-text">
                            {item.product.name}
                          </p>

                          <p className="text-xs text-muted">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-text">
                    Delivery Address
                  </h3>

                  <div className="text-sm leading-6 text-muted">
                    <p className="font-medium text-text">
                      {order.address.firstName}{" "}
                      {order.address.lastName}
                    </p>

                    <p>{order.address.street}</p>

                    <p>
                      {order.address.city}, {order.address.state}{" "}
                      {order.address.zipcode}
                    </p>

                    <p>{order.address.country}</p>
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-text">
                    Order Summary
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Total</span>

                      <span className="font-semibold text-text">
                        ${order.amount.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Payment</span>

                      <span className="text-text">
                        {order.paymentType}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Status</span>

                      <span
                        className={
                          order.isPaid
                            ? "font-medium text-success"
                            : "font-medium text-accent"
                        }
                      >
                        {order.isPaid ? "Paid" : "Pending"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-border px-5 py-4">
                <p className="text-sm text-muted">
                  {order.items.length}{" "}
                  {order.items.length === 1 ? "item" : "items"} in this
                  order
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FrontendLayout>
  );
}

