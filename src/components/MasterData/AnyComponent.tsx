// DataContext.js
import React, { createContext, useState } from 'react';
import { useParams, useRouter } from "next/navigation";
// Define the shape of the shared data and old data.
interface SomeProps {
  sharedData: any;
  updateSharedData: (data: any) => void;
  oldData: any;
  updateOldData: (data: any) => void;
}

const DataContext = createContext<SomeProps>(null!);

const DataProvider = ({ children }: any) => {
  const [sharedData, setSharedData] = useState([{}]);
  const updateSharedData = (data: any[]) => {
    setSharedData(data);
  };

  const [oldData, setOldData] = useState([{}]);
  const updateOldData = (data: any[]) => {
    setOldData(data);
  };

  const contextValue: SomeProps = {
    sharedData,
    updateSharedData,
    oldData,
    updateOldData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
