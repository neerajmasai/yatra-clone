import { createContext, useState } from "react";

export const FlightDataContext = createContext([]);

export const FlightDataProvider = ({ children }) => {
  const [flightContextData, setFlightContextData] = useState([]);
  const handleFlightContextDataChange = (data) => {
    setFlightContextData(data);
  };
  return (
    <FlightDataContext.Provider value={{flightContextData, handleFlightContextDataChange}}>
      {children}
    </FlightDataContext.Provider>
  );
};
