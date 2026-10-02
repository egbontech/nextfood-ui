"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaImage,
  FaTrash,
  FaUpload,
} from "react-icons/fa";

const cuisines = [
  "Healthy",
  "Salads",
  "Italian",
  "Pasta",
  "Chinese",
  "Noodles",
  "Desserts",
  "Bakery",
  "Fast Food",
  "Pizza",
];

export default function NewRestaurantPage() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/admin/restaurants"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
        >
          <FaArrowLeft size={13} />
          Back to Restaurants
        </Link>

        <h1 className="text-2xl font-semibold text-text sm:text-3xl">
          Add Restaurant
        </h1>

        <p className="mt-1 text-sm text-muted">
          Add a new restaurant to your food ordering platform.
        </p>
      </div>

      <form className="max-w-4xl space-y-6">
        {/* Restaurant Information */}
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-semibold text-text">
              Restaurant Information
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
            {/* Restaurant Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-text"
              >
                Restaurant Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="e.g. Fresh Bowl"
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-muted focus:border-primary"
              />
            </div>

            {/* Cuisine */}
            <div>
              <label
                htmlFor="cuisine"
                className="text-sm font-medium text-text"
              >
                Cuisine
              </label>

              <select
                id="cuisine"
                defaultValue=""
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none focus:border-primary"
              >
                <option value="" disabled>
                  Select cuisine
                </option>

                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Delivery Fee */}
            <div>
              <label
                htmlFor="deliveryFee"
                className="text-sm font-medium text-text"
              >
                Delivery Fee
              </label>

              <input
                id="deliveryFee"
                type="number"
                min="0"
                step="0.01"
                placeholder="2.49"
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
              />
            </div>

            {/* Delivery Time */}
            <div>
              <label
                htmlFor="deliveryTime"
                className="text-sm font-medium text-text"
              >
                Delivery Time
              </label>

              <input
                id="deliveryTime"
                type="text"
                placeholder="15-25 min"
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
              />
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="text-sm font-medium text-text"
              >
                Restaurant Status
              </label>

              <select
                id="status"
                defaultValue="open"
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none focus:border-primary"
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-text"
              >
                Description
              </label>

              <textarea
                id="description"
                rows={4}
                placeholder="Tell customers about this restaurant..."
                className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-semibold text-text">
              Restaurant Location
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
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
                placeholder="123 Main Street"
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
          </div>
        </div>

        {/* Restaurant Image */}
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-semibold text-text">
              Restaurant Image
            </h2>

            <p className="mt-1 text-xs text-muted">
              Upload one image to represent this restaurant.
            </p>
          </div>

          <div className="p-5">
            {image ? (
              <div className="relative h-64 w-full overflow-hidden rounded-lg border border-border bg-background sm:h-80">
                <Image
                  src={image}
                  alt="Restaurant preview"
                  fill
                  className="object-cover"
                />

                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-error shadow-sm transition hover:bg-red-50"
                  aria-label="Remove image"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ) : (
              <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background text-muted transition hover:border-primary hover:bg-[#FFF1E8] hover:text-primary sm:h-80">
                <FaUpload size={24} />

                <span className="mt-3 text-sm font-medium">
                  Upload Restaurant Image
                </span>

                <span className="mt-1 text-xs">
                  PNG, JPG or WEBP
                </span>

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}

            {!image && (
              <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                <FaImage size={13} />
                <span>
                  Use a high-quality image that represents the restaurant.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/admin/restaurants"
            className="rounded-lg border border-border bg-white px-5 py-2.5 text-center text-sm font-medium text-text transition hover:bg-background"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
}