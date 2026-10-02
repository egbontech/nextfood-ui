import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Desktop Background */}
      <Image
        src="/images/main-banner-bg.png"
        className="hidden h-auto w-full md:block"
        width={2000}
        height={700}
        alt="Delicious food"
      />

      {/* Mobile Background */}
      <Image
        src="/images/main-banner-bg-sm.png"
        className="block h-auto w-full md:hidden"
        width={1000}
        height={1200}
        alt="Delicious food"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex w-full flex-col items-center justify-end px-5 pb-8 text-center sm:px-8 md:items-start md:justify-center md:px-14 md:pb-0 md:text-left lg:px-20">
        <h1 className="max-w-70 text-3xl font-bold leading-tight text-white sm:max-w-md md:max-w-lg md:text-5xl lg:text-6xl">
          Delicious Food.
          <br />
          Delivered to Your Door.
        </h1>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">
          Order your favorite meals from local restaurants and enjoy delicious
          food delivered straight to you.
        </p>

        <Link
          href="/restaurants"
          className="mt-4 cursor-pointer rounded-md bg-white px-7 py-3 text-sm font-semibold text-zinc-700 transition sm:mt-6"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
