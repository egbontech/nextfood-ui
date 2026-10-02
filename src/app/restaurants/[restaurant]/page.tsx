import FrontendLayout from "@/components/layouts/FrontendLayout";
import Image from "next/image";
import {
  FiClock,
  FiMapPin,
  FiPlus,
  FiStar,
} from "react-icons/fi";



const menuItems = [
  {
    name: "Creamy Alfredo Pasta",
    description:
      "Creamy pasta tossed with parmesan, herbs, and a rich garlic sauce.",
    price: 12.99,
    image: "/images/pasta.jpg",
    category: "Pasta",
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with tomato sauce, mozzarella, and fresh basil.",
    price: 14.99,
    image: "/images/pizza.jpg",
    category: "Pizza",
  },
  {
    name: "Chicken Noodles",
    description:
      "Stir-fried noodles with tender chicken, vegetables, and savory sauce.",
    price: 11.99,
    image: "/images/noodles.jpg",
    category: "Noodles",
  },
  {
    name: "Classic Pancakes",
    description:
      "Fluffy pancakes served with fresh berries and maple syrup.",
    price: 8.99,
    image: "/images/cakes.jpg",
    category: "Breakfast",
  },
  
  {
    name: "Vegetable Pasta",
    description:
      "Fresh pasta combined with seasonal vegetables and tomato sauce.",
    price: 10.99,
    image: "/images/pasta.jpg",
    category: "Pasta",
  },
];

export default function RestaurantPage() {
  return (
    <FrontendLayout>
      <main className="min-h-screen pb-16">
        {/* Restaurant Hero */}
        <section className="relative">
          <div className="relative h-56 overflow-hidden sm:h-72 md:h-80">
            <Image
              src="/images/fresh-bowl.jpg"
              alt="Fresh Bowl"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-6 pb-8 md:px-16 lg:px-24 xl:px-32">
              <div className="text-white">
                <span className="inline-flex rounded-full bg-green-500 px-3 py-1 text-xs font-medium">
                  Open now
                </span>

                <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
                  Fresh Bowl
                </h1>

                <p className="mt-2 text-sm text-white/80">
                  Healthy, Salads
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Information */}
        <section className="border-b border-border bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <FiStar
                  size={16}
                  className="fill-current text-orange-500"
                />
                <span className="font-medium text-text">4.9</span>
                <span>(120+ ratings)</span>
              </div>

              <div className="flex items-center gap-2">
                <FiClock size={16} />
                <span>15-25 min</span>
              </div>

              <div className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>Green Avenue</span>
              </div>

              <span>
                Delivery fee{" "}
                <strong className="font-medium text-text">$2.49</strong>
              </span>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-muted">
              Fresh Bowl serves fresh, healthy meals prepared with quality
              ingredients and delivered straight to your door.
            </p>
          </div>
        </section>

        {/* Menu */}
        <section className="mx-auto max-w-7xl  pt-10 md:px-16 lg:px-24">
          {/* Menu Header */}
          <div>
            <p className="text-sm font-medium text-primary">
              Fresh Bowl menu
            </p>

            <h2 className="mt-1 text-2xl font-bold text-text sm:text-3xl">
              Explore our menu
            </h2>
          </div>


          {/* Menu Items */}
          <div className="mt-8">
           

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {menuItems.map((item) => (
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h4 className="font-semibold text-text">
                      {item.name}
                    </h4>

                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
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
          </div>

      
{/* Leave a Rating */}
<section className="mx-auto mt-12 max-w-7xl  pt-10 md:px-16 lg:px-24 xl:px-32">
  <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
    <div className="max-w-xl">
      <p className="text-sm font-medium text-primary">
        Share your experience
      </p>

      <h2 className="mt-1 text-2xl font-bold text-text">
        Leave a rating
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-muted">
        How was your experience with Fresh Bowl? Let other customers know
        what you think.
      </p>

      <div className="mt-6">
        <p className="text-sm font-medium text-text">
          Your rating
        </p>

        <div className="mt-3 flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              aria-label={`Rate ${star} out of 5`}
              className="text-gray-300 transition hover:scale-110 hover:text-orange-500"
            >
              <FiStar size={28} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="review"
          className="text-sm font-medium text-text"
        >
          Your review
        </label>

        <textarea
          id="review"
          rows={4}
          placeholder="Tell us about your experience..."
          className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="button"
        className="mt-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
      >
        Submit Review
      </button>
    </div>
  </div>
</section>

{/* Customer Reviews */}
<section className="mx-auto mt-8 max-w-7xl pb-10 md:px-16 lg:px-24 xl:px-32">
  <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
    <div>
      <p className="text-sm font-medium text-primary">Customer feedback</p>

      <h2 className="mt-1 text-2xl font-bold text-text sm:text-3xl">
        What customers are saying
      </h2>

      <p className="mt-2 text-sm text-muted">
        See what other customers think about their experience with Fresh Bowl.
      </p>
    </div>

    {/* Reviews */}
    <div className="mt-8 divide-y divide-border">
      {[
        {
          name: "Sarah Johnson",
          rating: 5,
          date: "2 days ago",
          review:
            "The food was fresh and delicious. Everything arrived on time and the portions were great. I’ll definitely order again!",
        },
        {
          name: "Michael Brown",
          rating: 4,
          date: "1 week ago",
          review:
            "Really good food and fast delivery. The salad was fresh and well prepared. Would definitely recommend Fresh Bowl.",
        },
        {
          name: "Emily Davis",
          rating: 5,
          date: "2 weeks ago",
          review:
            "Absolutely loved my order! The ingredients tasted fresh and the packaging was excellent. One of my favorite restaurants.",
        },
      ].map((review) => (
        <div
          key={`${review.name}-${review.date}`}
          className="py-6 first:pt-0 last:pb-0"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="font-semibold text-text">{review.name}</h4>

              <div className="mt-1 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={15}
                    className={
                      star <= review.rating
                        ? "fill-current text-orange-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>

            <span className="text-xs text-muted">{review.date}</span>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            {review.review}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>




        </section>
      </main>
    </FrontendLayout>
  );
}

