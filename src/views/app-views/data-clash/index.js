import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export const DataClash = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="data-clash-list" replace />} />
 </Routes>
 
}

export default DataClash;
