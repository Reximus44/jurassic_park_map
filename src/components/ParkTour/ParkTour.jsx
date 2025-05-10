import React from "react";
import "./ParkTour.css";

// Park tour images
import fenceSecurity from "../../assets/park-tour-imgs/fence_security.png";
import gift_shop from "../../assets/park-tour-imgs/jurassic-park-gift-shop.png";
import tour_vehicles from "../../assets/park-tour-imgs/park_tour_vehicles.png";
import tour_route from "../../assets/park-tour-imgs/park_tour.png";
import visitor_center from "../../assets/park-tour-imgs/visitor_center.png";

//The Part Tour route component 
export function ParkTour() {
  return (
    <div className="park-tour">
      <h1 className="park-tour__title">WELCOME TO THE JURASSIC PARK TOUR</h1>
      <p className="park-tour__description">
        Hello perspective park goers! Are you on the fence about having the
        adventure of your lives? Well follow me on this virtual tour to show you
        what you could be missing, as well as placate any un-founded fears about
        guest safety in the park.
      </p>
      <h2 className="park-tour__title">Safety</h2>
      <p className="park-tour__description">
        Safety is, of course, the number one priority of InGen&#169; and its
        subsidiaries, and great lengths have been taken to ensure the safety and
        comfort of all park guests during their stay in Jurassic Park. In this
        part of the tour we will go over how we keep you and your family safe.
      </p>
      <h2 className="park-tour__title">Fences</h2>
      <img
        src={fenceSecurity}
        alt="an electric fence from Jurassic Park"
        className="park-tour__image"
      />
      <p className="park-tour__description">
        To keep both our guests and our dinosaurs happy a healthy distance is
        enforced with the help of our state-of-the art electrified fences. Not
        to worry folks, the voltages are calculated to the relative mass and
        hide-thickness of each animal. Discouraging our more curious dinosaurs
        with a relatively small shock allows us to facilitate a positive viewing
        experience for both guest and dinosaur.
      </p>
      <h2 className="park-tour__title">Tour</h2>
      <img
        src={visitor_center}
        alt="the visitor center from Jurassic Park"
        className="park-tour__image"
      />
      <p className="park-tour__description">
        Moving on to what our guests can expect during their stay at the Park
        you will begin your adventure at the Visitor Center where you will be
        given a proper introduction to the Park and its methods by none other
        than our very own Dr. John Hammond.
      </p>
      <p className="park-tour__quote">"Spared no expense!" - John Hammond</p>
      <p className="park-tour__description">
        After that you will begin your tour of the Park in earnest by embarking
        on an automated experience with the help of our state-of-the art
        driver-less vehicles that will ferry you and your family through out the
        Park at a leisurely pace, giving you plenty of time to witness the
        dinosaurs in their natural habitats.
      </p>
      <img
        src={tour_vehicles}
        alt="the tour vehicles used in Jurassic Park"
        className="park-tour__image"
      />
      <img
        src={tour_route}
        alt="the tour vehicles used in Jurassic Park next to a sign that reads dilophosaurus"
        className="park-tour__image"
      />
      <p className="park-tour__description">
        After your tour has completed you will be dropped off back at the
        visitors center where you may proceed to any of the parks many other
        attractions including our five star restaurant and hotel. I personally
        recommend also visiting the gift shop on the way.
      </p>
      <img
        src={gift_shop}
        alt="jurassic park gifts"
        className="park-tour__image"
      />
      <p className="park-tour__description">
        Thank you for taking this virtual tour with us and we hope to see you
        soon! Tickets start at $3000 and there are ATMs at the front entrance.
      </p>
    </div>
  );
}
