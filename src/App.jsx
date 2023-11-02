import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BlogSection from "./components/BlogSection";
import TeamSection from "./components/TeamSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TeamSection />
      <BlogSection />
    </div>
  );
};

export default App;
