import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyDeals from "@/components/DailyDeals";
import SponsorAds from "@/components/SponsorAds";
import CommunityLinks from "@/components/CommunityLinks";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen pb-14">
      <Navbar />
      <HeroSection />
      <DailyDeals />
      <SponsorAds />
      <CommunityLinks />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
