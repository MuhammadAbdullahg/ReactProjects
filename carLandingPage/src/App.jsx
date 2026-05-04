import { useEffect, useState } from "react";
import Background from "./Components/background/Background";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your Passion" },
    { text1: "Give in to", text2: "your Passion" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
  }, []);
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
};

export default App;
