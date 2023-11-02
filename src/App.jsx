import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BlogSection from "./components/BlogSection";
import TeamSection from "./components/TeamSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TeamSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default App;
