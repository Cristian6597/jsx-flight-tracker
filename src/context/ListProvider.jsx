
import { createContext, useState } from 'react';

export const TypeContext = createContext();
export const NameContext = createContext();
export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  
  // Stato per il tipo ( destinazione cartella )
  const [selectedType, setSelectedType] = useState('Lavoro');
  const changeType = (type) => {
    setSelectedType(type);
  };


  return (
    <ListContext.Provider value={{ selectedType, changeType }}>
      <NameContext.Provider value={{ /* name, updateName */ }}>
        {children}
      </NameContext.Provider>
    </ListContext.Provider>
  );
};