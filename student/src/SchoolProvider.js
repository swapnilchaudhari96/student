import React, { createContext, useState } from 'react';

export const SchoolContext = createContext();

const SchoolProvider = ({ children }) => {
  const [state, setState] = useState({
    /* initial state */
  });

  return (
    <SchoolContext.Provider value={{ state, setState }}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolProvider;
