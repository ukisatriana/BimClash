import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const KategoriClash = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="kategori-clash-list" replace />} />
 </Routes>
 
}


export default KategoriClash;
