import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyDeals from "@/components/DailyDeals";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DailyDeals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
