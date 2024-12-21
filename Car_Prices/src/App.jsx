    import React, { useState } from 'react';
    import './App.css';

    const CarPricePredictionForm = () => {
      const [formData, setFormData] = useState({
        model: "",
        vehicleAge: "",
        kmDriven: "",
        sellerType: "",
        fuelType: "",
        transmissionType: "",
        mileage: "",
        engine: "",
        maxPower: "",
        seats: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);

      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Model:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Vehicle Age:</label>
            <input
              type="number"
              name="vehicleAge"
              value={formData.vehicleAge}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>KM Driven:</label>
            <input
              type="number"
              name="kmDriven"
              value={formData.kmDriven}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Seller Type:</label>
            <input
              type="text"
              name="sellerType"
              value={formData.sellerType}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Fuel Type:</label>
            <input
              type="text"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Transmission Type:</label>
            <input
              type="text"
              name="transmissionType"
              value={formData.transmissionType}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Mileage:</label>
            <input
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Engine:</label>
            <input
              type="text"
              name="engine"
              value={formData.engine}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Max Power:</label>
            <input
              type="text"
              name="maxPower"
              value={formData.maxPower}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Seats:</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Predict Price</button>
        </form>
      );
    };

    export default CarPricePredictionForm;
