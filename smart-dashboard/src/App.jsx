import React, { useState, useEffect } from "react";
import {GaugeComponent} from "react-gauge-component";

export default function App() {
  const [rpm, setRpm] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:6789/");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setRpm(data);
      setSpeed(data.speed);
    };
    return () => ws.close();
  }, []);

  return (
    <div style={{ display: "flex", gap: "50px", padding: "50px" }}>
      <div>
        <h2>RPM</h2>
        <GaugeComponent 
          id="rpm-gauge" 
          value={rpm} 
          minValue={0} 
          maxValue={6000}
          arc={{
            subArcs: [
              { limit: 4500, color: '#5BE12C', glow: true},
              { color: '#EA4228' }
            ],
            effects:[
              {
                glow: true,
                glowColor: "green",
                glowSpread: 3
              }
            ]
          }}
          pointer={{
            type: "needle"
          }}
        />
      </div>
      <div>
        <h2>Speed</h2>
        <GaugeComponent id="speed-gauge" nrOfLevels={30} percent={speed / 150} />
      </div>
      <div>
        <h2>Fuel</h2>
        <GaugeComponent id="speed-gauge" nrOfLevels={30} percent={speed / 150} />
      </div>
      <div>
        <h2>Oil Pressure</h2>
        <GaugeComponent id="speed-gauge" nrOfLevels={30} percent={speed / 150} />
      </div>
    </div>
  );
}