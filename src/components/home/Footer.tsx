import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="px-6 py-10 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-text"
            >
              Next<span className="text-primary">Food</span>
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Delicious food from your favorite restaurants, delivered
              straight to your door.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/"
              className="text-muted transition hover:text-primary"
            >
              Home
            </Link>

            <Link
              href="/restaurants"
              className="text-muted transition hover:text-primary"
            >
              Restaurants
            </Link>

            <Link
              href="/menu"
              className="text-muted transition hover:text-primary"
            >
              Menu
            </Link>

            <Link
              href="/contact"
              className="text-muted transition hover:text-primary"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:text-primary"
            >
              <FiFacebook size={16} />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:text-primary"
            >
              <FiInstagram size={16} />
            </Link>

            <Link
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:text-primary"
            >
              <FiTwitter size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} NextFood. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

