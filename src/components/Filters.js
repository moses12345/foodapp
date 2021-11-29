import React from "react";
import "./filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filter-label">Filters</div>
      <div className="filter">
        <label className="container">
          <span>Open now</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Most popular places</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Best rated</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Fast delivery</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Cheap delivery</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="filter-label">Cuisine</div>

      <div className="cuisine">
        <label className="container">
          <span>All</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Chinese</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Mexican</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>American</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Italian</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="filter-label">Dietary</div>
      <div className="dietary">
        <label className="container">
          <span>Vegitarian</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Vegan</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <span>Non- Vegitarian</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
