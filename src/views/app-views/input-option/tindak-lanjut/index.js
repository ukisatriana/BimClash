import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export const TindakLanjut = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="tindak-lanjut-list" replace />} />
 </Routes>
 
}

export default TindakLanjut;
