import React, { useState } from 'react';

const Graph = () => {

  return (
    <div class="bg-bg-gray text-white p-6">
  <div class="container mx-auto">
    <div class="bg-bg-white p-6 rounded-lg mb-6">
      <div class="text-center">
        <h4 class="text-lg font-bold mb-2">Temperature</h4>
        <p class="text-sm text-gray-500">Realtime temperature reading</p>
      </div>
      <div id="tempChart" class="ct-chart ct-major-twelfth mt-4"></div>
    </div>
    
    <div class="bg-bg-white p-6 rounded-lg mb-6">
      <div class="text-center">
        <h4 class="text-lg font-bold mb-2">Humidity</h4>
        <p class="text-sm text-gray-500">Realtime humidity reading</p>
      </div>
      <div id="humChart" class="ct-chart ct-major-twelfth mt-4"></div>
    </div>

    <div class="bg-bg-white p-6 rounded-lg mb-6">
      <div class="text-center">
        <h4 class="text-lg font-bold mb-2">Soil Moisture Level</h4>
        <p class="text-sm text-gray-500">Realtime soil moisture level reading</p>
      </div>
      <div id="soilChart" class="ct-chart ct-major-twelfth mt-4"></div>
    </div>

    <div class="bg-bg-white p-6 rounded-lg">
      <div class="text-center">
        <h4 class="text-lg font-bold mb-2">Light Level</h4>
        <p class="text-sm text-gray-500">Realtime light level reading</p>
      </div>
      <div id="lightChart" class="ct-chart ct-major-twelfth mt-4"></div>
    </div>
  </div>
</div>

  );
};

export default Graph;
