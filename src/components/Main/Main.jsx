import React from "react";
import "./Main.css";
import { dinoImages } from "../../utils/constants";

function Main() {
  return (
    <main className="main">
      <button className="main__btn main__btn_baryonyx">
        <img src={dinoImages.Baryonyx} alt="baryonyx button" />
      </button>
      <button className="main__btn main__btn_brachiosaurous">
        <img src={dinoImages.Brachiosaurus} alt="brachiosaurous button" />
      </button>
      <button className="main__btn main__btn_dilophosaurous">
        <img src={dinoImages.Dilophosaurus} alt="dilophosaurous button" />
      </button>
      <button className="main__btn main__btn_gallimimus">
        <img src={dinoImages.Gallimimus} alt="gallimimus button" />
      </button>
      <button className="main__btn main__btn_herrerasaurous">
        <img src={dinoImages.Herrerasaurus} alt="herrerasaurous button" />
      </button>
      <button className="main__btn main__btn_metriacanthosaurous">
        <img
          src={dinoImages.Metriacanthosaurus}
          alt="metriacanthosaurous button"
        />
      </button>
      <button className="main__btn main__btn_parasaurolophus">
        <img src={dinoImages.Parasaurolophus} alt="parasaurolophus button" />
      </button>
      <button className="main__btn main__btn_proceratosaurous">
        <img src={dinoImages.Proceratosaurus} alt="proceratosaurous button" />
      </button>
      <button className="main__btn main__btn_segisaurous">
        <img src={dinoImages.Segisaurus} alt="segisaurous button" />
      </button>
      <button className="main__btn main__btn_triceratops">
        <img src={dinoImages.Triceratops} alt="triceratops button" />
      </button>
      <button className="main__btn main__btn_tyranosaurus">
        <img src={dinoImages.Tyrannosaurus} alt="T.rex button" />
      </button>
      <button className="main__btn main__btn_velociraptor">
        <img src={dinoImages.Velociraptor} alt="velociraptor button" />
      </button>
    </main>
  );
}

export default Main;
