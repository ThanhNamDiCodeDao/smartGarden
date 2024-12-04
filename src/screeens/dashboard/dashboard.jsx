import React, { useState } from 'react';
import mqtt from 'mqtt/dist/mqtt.min';

const Dashboard = () => {
  const [autoWatering, setAutoWatering] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [soilMoisture, setSoilMoisture] = useState('');
  const [relayStatus, setRelayStatus] = useState('OFF');

  useEffect(() => {
    // Connect to MQTT broker
    const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
      username: 'nam',
      password: 'nam',
    });

    const topicTemperature = 'sensor/temperature';
    const topicHumidity = 'sensor/humidity';
    const topicSoilMoisture = 'sensor/soilMoisture';
    const topicRelayStatus = 'status/relay';

    // Subscribe to topics on successful connection
    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe([topicTemperature, topicHumidity, topicSoilMoisture, topicRelayStatus]);
    });

    // Handle incoming messages
    client.on('message', (topic, message) => {
      const payload = message.toString();
      if (topic === topicTemperature) {
        setTemperature(payload);
      } else if (topic === topicHumidity) {
        setHumidity(payload);
      } else if (topic === topicSoilMoisture) {
        setSoilMoisture(payload);
      } else if (topic === topicRelayStatus) {
        setRelayStatus(payload === 'ON' ? 'ON' : 'OFF');
      }
    });

    // Clean up on unmount
    return () => {
      client.end();
    };
  }, []);

  // Toggle the pump state
  const togglePump = () => {
    const newStatus = relayStatus === 'ON' ? 'OFF' : 'ON';
    const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
      username: 'nam',
      password: 'nam',
    });
    client.publish('status/relay', newStatus);
    console.log(`Relay toggled to: ${newStatus}`);
    setRelayStatus(newStatus);
  };

  // Handle the automated watering toggle
  const toggleAutoWatering = () => {
    setAutoWatering((prev) => !prev);
    togglePump(); // Optionally toggle the pump when auto-watering changes
  };


  return (
    <div className="bg-bg-gray text-white p-6 size-full">
      <div className="container mx-auto bg-bg-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Temperature */}
          <div className="bg-bg-white p-6 rounded-lg flex items-center">
            <div className="text-red-500 text-4xl">
              <i className="fas fa-temperature-high"></i>
            </div>
            <div className="ml-4">
              <p className="text-lg">Temperature</p>
              <span id="tempValue" className="text-xl font-bold">25</span>°C
            </div>
          </div>

          {/* Humidity */}
          <div className="bg-bg-white p-6 rounded-lg flex items-center">
            <div className="text-blue-500 text-4xl">
              <i className="fas fa-tint"></i>
            </div>
            <div className="ml-4">
              <p className="text-lg">Humidity</p>
              <span id="humValue" className="text-xl font-bold">60</span>%
            </div>
          </div>

          {/* Soil Moisture */}
          <div className="bg-bg-white p-6 rounded-lg flex items-center">
            <div className="text-green-500 text-4xl">
              <i className="fas fa-seedling"></i>
            </div>
            <div className="ml-4">
              <p className="text-lg">Soil Moisture</p>
              <span id="soilValue" className="text-xl font-bold">75</span>%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Brightness Level */}
          <div className="bg-bg-white p-6 rounded-lg flex items-center">
            <div className="text-yellow-500 text-4xl">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="ml-4">
              <p className="text-lg">Brightness Level</p>
              <span id="lightValue" className="text-xl font-bold">80</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Automated Watering */}
          <div className="bg-bg-white p-6 rounded-lg text-center">
            <h4 className="text-lg font-bold mb-4">Automated Watering</h4>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={autoWatering}
                onChange={toggleAutoWatering}
              />
              <span
                className={`w-12 h-6 flex items-center bg-bg-gray rounded-full p-1 transition ${
                  autoWatering ? 'bg-green-500' : ''
                }`}
              >
                <span
                  className={`bg-bg-white w-4 h-4 rounded-full shadow-md transform ${
                    autoWatering ? 'translate-x-6' : ''
                  } transition`}
                ></span>
              </span>
            </label>
          </div>

          {/* Manual Watering */}
          <div className="bg-bg-white p-6 rounded-lg text-center">
            <h4 className="text-lg font-bold mb-4">Manual Watering</h4>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={manualWatering}
                onChange={toggleManualWatering}
              />
              <span
                className={`w-12 h-6 flex items-center bg-bg-gray rounded-full p-1 transition ${
                  manualWatering ? 'bg-green-500' : ''
                }`}
              >
                <span
                  className={`bg-bg-white w-4 h-4 rounded-full shadow-md transform ${
                    manualWatering ? 'translate-x-6' : ''
                  } transition`}
                ></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
