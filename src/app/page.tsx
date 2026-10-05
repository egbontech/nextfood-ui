import Banner from "@/components/home/Banner";
import Categories from "@/components/home/CategorySection";

import TopDishes from "@/components/home/TopDishes";
import FrontendLayout from "@/components/layouts/FrontendLayout";

export default function Home() {
  return (
    <FrontendLayout>
      <div className="mt-8">
        <Banner />
        <Categories/>
        <TopDishes/>       
      </div>
    </FrontendLayout>
  );
}
