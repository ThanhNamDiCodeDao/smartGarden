import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from '../screeens/dashboard/dashboard';
import Graph from '../screeens/graph/graph';
const AppRoutes = () => (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/graph" element={<Graph />} />
    </Routes>
);

export default AppRoutes;