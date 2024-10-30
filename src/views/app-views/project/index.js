import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export const Project = () => {
  
 <Routes>
  <Route path="*" element={<Navigate to="project-list" replace />} />
 </Routes>
 
}

export default Project;
