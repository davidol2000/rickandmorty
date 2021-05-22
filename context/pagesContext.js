import { createContext, useState } from 'react';

export const PagesContext = createContext();

import React from 'react';

export default function PagesProvider({ children }) {
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <PagesContext.Provider
      value={{ pagesCount, setPagesCount, currentPage, setCurrentPage }}
    >
      {children}
    </PagesContext.Provider>
  );
}
