import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export const JenisClash = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="jenis-clash-list" replace />} />
 </Routes>
 
}

export default JenisClash;
