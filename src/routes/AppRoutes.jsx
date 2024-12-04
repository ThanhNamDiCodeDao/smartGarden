import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Graph from '../graph/graph';
const AppRoutes = () => (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/graph" element={<Graph />} />
    </Routes>
);

export default AppRoutes;