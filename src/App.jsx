import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BlogSection from "./components/BlogSection";
import TeamSection from "./components/TeamSection";
import FooterSection from "./components/FooterSection";
import LogoCloud from "./components/LogoCloud";
import FeatureSection from "./components/FeatureSection";
import StatsSection from "./components/StatsSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <TeamSection />
      <BlogSection />
      <LogoCloud />
      <FooterSection />
    </div>
  );
};

export default App;
