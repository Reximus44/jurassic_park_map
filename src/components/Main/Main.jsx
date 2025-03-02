import React from "react";
import { useState } from "react";
import "./Main.css";
import { dinoImages } from "../../utils/constants";
import { DinoModal } from "../DinoModal/DinoModal";
import { modalConfig } from "../../utils/constants";

// The Main component renders the WeatherCard component and
// a section with buttons for each dinosaur.
function Main({ openModal }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentInfo, setCurrentInfo] = useState({
    title: "",
    description: "",
    image: "#",
  });

  function onClose() {
    setModalIsOpen(false);
  }

  return (
    <main className="main">
      <section className="map">
        
      {/* The map function iterates over my modalConfig array and searches for the entry.title and coverts it 
        to lowercase so that my object config key value can line-up with each specific className modifier  */}

        {modalConfig.map((entry) => {
          return (
            <button
              key={entry.title}
              className={`map__btn map__btn_${entry.title.toLowerCase()}`}
              onClick={() => {
                setModalIsOpen(true);
                setCurrentInfo(entry);
              }}
            >
              <img
                src={dinoImages[entry.title]}
                alt={`${entry.title} button`}
              />
            </button>
          );
        })}
      </section>
      <DinoModal
        currentInfo={currentInfo}
        openModal={openModal}
        isOpen={modalIsOpen}
        onClose={onClose}
      />
    </main>
  );
}

export default Main;
