import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyDeals from "@/components/DailyDeals";
import DataSavingTips from "@/components/DataSavingTips";
import DataCalculator from "@/components/DataCalculator";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen pb-14">
      <Navbar />
      <HeroSection />
      <DailyDeals />
      <DataSavingTips />
      <DataCalculator />
      <Newsletter />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
