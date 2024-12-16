import React from 'react';
import '../styles/ProgressBar.css';

export const ProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Select Service' },
    { id: 2, label: 'Timeslot' },
    { id: 3, label: 'Add details' },
    { id: 4, label: 'Confirm and Payment' },
    { id: 5, label: 'Done' }
  ];

  return (
    <div className="progress-container">
      {steps.map((step) => (
        <div key={step.id} className="progress-step">
          <div className="step-label">
            {step.id}. {step.label}
          </div>
          <div className="progress-bar-wrapper">
            <div 
              className={`progress-bar ${step.id <= currentStep ? 'active' : 'inactive'}`}
              style={{ width: step.id <= currentStep ? '100%' : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};


