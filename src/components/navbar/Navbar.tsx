"use client";

import { useAuthModal } from "@/store/authModalStore";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openLogin } = useAuthModal();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="relative z-40 bg-white">
        <div className="flex items-center justify-between px-6 py-4 md:px-16 lg:px-24 xl:px-32">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <FiShoppingBag size={21} />
            </div>

            <span className="text-xl font-bold tracking-tight text-text">
              Next<span className="text-primary">Food</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 sm:flex">
            <Link
              href="/"
              className="text-sm font-medium text-text transition hover:text-primary"
            >
              Home
            </Link>

            <Link
              href="/restaurants"
              className="text-sm font-medium text-muted transition hover:text-primary"
            >
              Restaurants
            </Link>

            <Link
              href="/menu"
              className="text-sm font-medium text-muted transition hover:text-primary"
            >
              Menu
            </Link>

            <Link
              href="/orders"
              className="text-sm font-medium text-muted transition hover:text-primary"
            >
              My Orders
            </Link>

            {/* Search */}
            <div className="hidden items-center gap-2 rounded-full border border-border bg-background px-4 lg:flex">
              <FiSearch className="text-muted" size={16} />

              <input
                type="text"
                placeholder="Search food..."
                className="w-36 bg-transparent py-2 text-sm outline-none placeholder:text-muted"
              />
            </div>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              type="button"
              aria-label="Open cart"
              className="relative cursor-pointer"
            >
              <FiShoppingBag
                size={23}
                className="text-muted transition hover:text-primary"
              />

              <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-medium text-white">
                3
              </span>
            </button>

            {/* Login */}
            <button
              onClick={openLogin}
              type="button"
              className="cursor-pointer rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-muted transition hover:bg-background hover:text-primary sm:hidden"
          >
            {open ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute left-0 top-full w-full flex-col gap-5 border-b border-border bg-white px-6 py-6 shadow-md sm:hidden`}
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-text transition hover:text-primary"
            >
              Home
            </Link>

            <Link
              href="/restaurants"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted transition hover:text-primary"
            >
              Restaurants
            </Link>

            <Link
              href="/menu"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted transition hover:text-primary"
            >
              Menu
            </Link>

            <Link
              href="/orders"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted transition hover:text-primary"
            >
              My Orders
            </Link>

            {/* Mobile Search */}
            <div className="flex w-full items-center gap-2 rounded-full border border-border bg-background px-4">
              <FiSearch className="text-muted" size={16} />

              <input
                type="text"
                placeholder="Search food..."
                className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted"
              />
            </div>

            {/* Mobile Cart */}
            <button
              onClick={() => setCartOpen(true)}
              type="button"
              className="flex items-center gap-3 text-sm font-medium text-text transition hover:text-primary"
            >
              <div className="relative">
                <FiShoppingBag size={21} />

                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-white">
                  3
                </span>
              </div>

              <span>Cart</span>
            </button>

            {/* Mobile Login */}
            <button
            onClick={openLogin}
              type="button"
              className="w-full rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
