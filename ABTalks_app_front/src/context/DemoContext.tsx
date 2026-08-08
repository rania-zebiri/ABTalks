import React, { createContext, useContext, useState } from 'react';
import { mockUserStates, type StudentStateKey } from '../data/mockUserStates'; // Fixed type import

interface DemoContextType {
  currentStateKey: StudentStateKey;
  userData: typeof mockUserStates['active_student'];
  setDemoState: (stateKey: StudentStateKey) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStateKey, setCurrentStateKey] = useState<StudentStateKey>('active_student');

  return (
    <DemoContext.Provider
      value={{
        currentStateKey,
        userData: mockUserStates[currentStateKey],
        setDemoState: setCurrentStateKey,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemoState = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemoState must be used within a DemoProvider');
  }
  return context;
};