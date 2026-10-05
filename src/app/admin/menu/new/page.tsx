"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

const restaurants = [
  "Fresh Bowl",
  "Pasta Corner",
  "Golden Wok",
  "Sweet Cravings",
];

const categories = [
  "Breakfast",
  "Dessert",
  "Ice Cream",
  "Noodles",
  "Pasta",
  "Pizza",
  "Rolls",
  "Vegetables",
];

export default function AddMenuItem() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);

    e.target.value = "";
  };

  const removeImage = () => {
    if (image) {
      URL.revokeObjectURL(image);
    }

    setImage(null);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload a menu item image.");
      return;
    }

    // Add menu item logic here
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">
          Add Menu Item
        </h1>

        <p className="mt-1 text-sm text-muted">
          Add a new dish to a restaurant menu.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded-xl border border-border bg-card p-5 sm:p-6 lg:p-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Menu Item Name */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-text">
              Menu Item Name
            </label>

            <input
              type="text"
              placeholder="e.g. Creamy Alfredo Pasta"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>

          {/* Restaurant */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Restaurant
            </label>

            <select
              defaultValue=""
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            >
              <option value="" disabled>
                Select restaurant
              </option>

              {restaurants.map((restaurant) => (
                <option key={restaurant} value={restaurant}>
                  {restaurant}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Category
            </label>

            <select
              defaultValue=""
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            >
              <option value="" disabled>
                Select category
              </option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Price
            </label>

            <div className="flex overflow-hidden rounded-lg border border-border focus-within:border-primary">
              <span className="flex items-center bg-background px-4 text-sm text-muted">
                $
              </span>

              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full bg-white px-3 py-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Availability
            </label>

            <select
              defaultValue="available"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            >
              <option value="available">Available</option>

              <option value="unavailable">Unavailable</option>
            </select>

            <p className="mt-1.5 text-xs text-muted">
              Mark the item as unavailable when it cannot currently
              be ordered.
            </p>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-text">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Enter a short description about the dish..."
              className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>

          {/* Menu Item Image */}
          <div className="md:col-span-2">
            <div className="mb-3">
              <label className="block text-sm font-medium text-text">
                Menu Item Image
              </label>

              <p className="mt-1 text-xs text-muted">
                Upload one image for this menu item.
              </p>
            </div>

            {image ? (
              <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-xl border border-border bg-background">
                <Image
                  src={image}
                  alt="Menu item preview"
                  fill
                  className="object-cover"
                />

                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-error shadow-sm transition hover:bg-error hover:text-white"
                  aria-label="Remove image"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            ) : (
              <label className="flex aspect-video w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background transition hover:border-primary hover:bg-[#FFF1E8]">
                <FiUploadCloud size={32} className="text-primary" />

                <span className="mt-2 text-sm font-medium text-text">
                  Upload Image
                </span>

                <span className="mt-1 text-xs text-muted">
                  PNG, JPG or WEBP
                </span>

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}

            {!image && (
              <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <FiImage size={15} />

                <span>One image is required.</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            Add Menu Item
          </button>
        </div>
      </form>
    </div>
  );
}