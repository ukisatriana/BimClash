import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const StatusValidasi = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="status-validasi-list" replace />} />
 </Routes>
 
}


export default StatusValidasi;
