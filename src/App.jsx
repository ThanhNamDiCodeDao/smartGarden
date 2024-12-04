// App.jsx
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';
const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="grow flex items-center">
        <AppRoutes/>
      </div>
    </div>
  );
};

export default App;
