import React, { createContext, useState } from 'react';

export const USADataContext = createContext();

export const USADataProvider = props => {
  const [USAData, setUSAData] = useState(false);

  return (
    <USADataContext.Provider value={[USAData, setUSAData]}>
      {props.children}
    </USADataContext.Provider>
  );
};
