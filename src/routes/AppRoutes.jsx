import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from '../screeens/dashboard/dashboard';
const AppRoutes = () => (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
);

export default AppRoutes;