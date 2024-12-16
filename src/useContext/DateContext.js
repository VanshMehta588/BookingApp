import React, { createContext, useState } from 'react';

// Create the context
export const DateContext = createContext();

// Create the provider component
export const DateProvider = ({ children }) => {
  const [availableDate, setAvailableDate] = useState(new Date());  // Initialize the availableDate

  return (
    <DateContext.Provider value={{ availableDate, setAvailableDate }}>
      {children}
    </DateContext.Provider>
  );
};
