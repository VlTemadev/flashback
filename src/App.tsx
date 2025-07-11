import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Start from "./components/start/Start";
import RentProcess from "./components/rent-process/RentProcess";
import RetroGaminConsoleRental from "./components/retro-gamin-console/RetroGamingConsoleRental";
import SlotMachinesWithGames from "./components/slot-machines-with-games-for-rent/SlotMachinesWithGames";
import Catalog from "./components/catalog/Catalog";
import RentGamingConsoleWithSwipe from "./components/rent-gamin-console-with-swipe/RentGamingConsoleWithSwipe";
import DashedDivider from "./components/dashed/DashedDivider";
import Footer from "./components/footer/Footer";
import PacmanGame from "./components/pacman/PacmanGame";

function App() {
  useEffect(() => {
    function preventArrowScroll(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      const isEditable =
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        (e.target as HTMLElement).isContentEditable;
      if (isEditable) return;

      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
      }
    }
    window.addEventListener("keydown", preventArrowScroll, { passive: false });
    return () => window.removeEventListener("keydown", preventArrowScroll);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Start />
      <RentProcess />
      <RetroGaminConsoleRental />
      <DashedDivider />
      <SlotMachinesWithGames />
      <Catalog />
      <RentGamingConsoleWithSwipe />
      <DashedDivider />
      <PacmanGame />
      <Footer />
    </React.Fragment>
  );
}

export default App;
