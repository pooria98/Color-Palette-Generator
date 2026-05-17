import GenerateButton from "./components/GenerateButton";
import Navbar from "./components/Navbar";
import PaletteSection from "./components/PaletteSection";

const Home = () => {
  return (
    <main className="flex flex-col justify-between w-full h-dvh min-h-120">
      <Navbar />
      <PaletteSection />
      <GenerateButton />
    </main>
  );
};

export default Home;
