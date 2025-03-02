import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { ParkTour } from "../ParkTour/ParkTour";
import { useEffect, useState } from "react";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { APIKey, coordinates } from "../../utils/constants";
import { Routes, Route } from "react-router-dom";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setmodalData] = useState({});
  const [weatherData, setWeatherData] = useState({});

  const openModal = (data) => {
    setModalIsOpen(true);
  };

  useEffect(() => {
    getWeather(coordinates, APIKey).then((data) => {
      const filteredWeatherData = filterWeatherData(data);
      setWeatherData(filteredWeatherData);
    });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header weatherData={weatherData} />
        <Routes>
          <Route path="/" element={<Main openModal={openModal} />} />
          <Route path="/park-tour" element={<ParkTour />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
