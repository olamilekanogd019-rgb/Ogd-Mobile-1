import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DataSavingTips from "@/components/DataSavingTips";
import DataCalculator from "@/components/DataCalculator";
import TelecomDeals from "@/components/TelecomDeals";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DataSavingTips />
      <DataCalculator />
      <TelecomDeals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
