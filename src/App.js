import './App.css';
import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { SelectService } from "./components/SelectService";
import BookingInterface from './components/BookingInterface';
import {UserInterface} from './components/UserInterface';
import {WishingInterface} from './components/WishingInterface';
import {PaymentMode} from './components/PaymentMode';
import { DateProvider } from './useContext/DateContext';

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <SelectService />
        );
      case 2:
        return (
          <BookingInterface />
        );
      case 3:
        return (
          <UserInterface />
        );
      case 4:
        return (
          <PaymentMode />
        );
      case 5:
        return (
          <WishingInterface />

        );
      default:
        return null;
    }
  };

  return (
    <DateProvider>
      <div className="booking-container">
        <ProgressBar currentStep={currentStep} />
        <div className="content-area">
          {renderStepContent()}
        </div>
        <div className="navigation-buttons">
          <button
            className="btn btn-dark"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={currentStep === 5}
          >
            {currentStep === 4 ? 'Confirm' : 'Next'}
          </button>
        </div>
      </div>
    </DateProvider>
  );
}

export default App;
