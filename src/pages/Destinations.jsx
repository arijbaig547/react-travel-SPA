import React from "react";
import "./Destinations.css";

function Destinations() {
  const destinations = [
    {
      name: "Paris",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "New York",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=1526&auto=format&fit=crop",
    },
    {
      name: "Tokyo",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  return (
    <div className="destinations-page">
      <h1 className="page-title mt-5">Explore Top Destinations</h1>
      <p className="subtitle">
        Discover the beauty of the world with our handpicked destinations
      </p>

      {/* Map */}
      <div className="map-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="world-map"
        />
      </div>

      {/* Destination Cards */}
      <div className="cards-container">
        {destinations.map((place, index) => (
          <div key={index} className="destination-card">
            <img src={place.image} alt={place.name} className="thumb" />
            <h3>{place.name}</h3>
            <p>{place.country}</p>
            <button className="view-btn">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
