import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <RingLoader
            color={"#FFCC00"}
            loading={isLoading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
