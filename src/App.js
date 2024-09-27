import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="biodata-container">
      <h2>Biodata</h2>
      <div className="info-section">
        <div className="info-row">
          <span className="label">Name:</span>
          <span className="value">Santhosh Pothuganti</span>
        </div>
        <div className="info-row">
          <span className="label">Date of Birth:</span>
          <span className="value">10/21/1999 – 5:10 AM</span>
        </div>
        <div className="info-row">
          <span className="label">Height:</span>
          <span className="value">5.9</span>
        </div>
        <div className="info-row">
          <span className="label">Graduation:</span>
          <span className="value">Masters in Computer Science(University at Buffalo, June 2024)</span>
        </div>
        <div className="info-row">
          <span className="label">Under Graduation:</span>
          <span className="value">Bachelors in Chemical Engineering(NIT Warangal, May 2021)</span>
        </div>
        <div className="info-row">
          <span className="label">Caste:</span>
          <span className="value">Arya Vysya</span>
        </div>
        <div className="info-row">
          <span className="label">Star:</span>
          <span className="value">Punarvasu</span>
        </div>
        <div className="info-row">
          <span className="label">Gothram:</span>
          <span className="value">Midhunakula, Budhunakula (Secondary)</span>
        </div>
        <div className="info-row">
          <span className="label">Contact:</span>
          <span className="value">+1.716.305.8391</span>
        </div>
        <div className="info-row">
          <span className="label">Visa Status:</span>
          <span className="value">F1 OPT</span>
        </div>
        <div className="info-row">
          <span className="label">Salary:</span>
          <span className="value">90K (USD) – Contract</span>
        </div>
        <div className="info-row">
          <span className="label">Location:</span>
          <span className="value">Princeton, NJ</span>
        </div>
      </div>

      <h3>Family Details</h3>
      <div className="info-section">
        <div className="info-row">
          <span className="label">Father's Name:</span>
          <span className="value">Vasu Deva Murthy Pothuganti</span>
        </div>
        <div className="info-row">
          <span className="label">Occupation:</span>
          <span className="value"> Govt. Teacher</span>
        </div>
        <div className="info-row">
          <span className="label">Mother's Name:</span>
          <span className="value">Jayasree Pothuganti</span>
        </div>
        <div className="info-row">
          <span className="label">Sister's Name:</span>
          <span className="value">Sneha Pothuganti</span>
        </div>
        <div className="info-row">
          <span className="label">Address:</span>
          <span className="value">Suryapet</span>
        </div>
      </div>
    </div>
  );
};

export default App;
