import React, { useState, useEffect } from "react";
import {GaugeComponent} from "react-gauge-component";
import { defaultTickLabels } from "react-gauge-component/dist/lib/GaugeComponent/types/Tick";

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
            width: 0.5,
            subArcs: [
              {limit: 1000, color: 'gray', glow: true},
              {limit: 2000, color: 'gray', glow: true},
              {limit: 3000, color: 'gray', glow: true},
              {limit: 4000, color: 'gray', glow: true},
              {limit: 4500, color: 'gray', glow: true},
              {limit: 5000, color: '#EA4228', glow: true },
              {limit: 6000, color: '#EA4228', glow: true },
            ]
          }}
          pointer={{
            type: "needle",
            color: "#EA4228",
            elastic: true,
            hideGrabHandle: true
          }}
          labels={{
            valueLabel:{
              offsetY: 25
            },
            tickLabels: {
              type: "outer",
              ticks: [
                {value: 0},
                {value: 1000},
                {value: 2000},
                {value: 3000},
                {value: 4000},
                {value: 5000},
                {value: 6000}
              ]
            }
          }}
        />
      </div>
      <div>
        <h2>Speed</h2>
          <GaugeComponent 
          id="speed-gauge" 
          value={rpm} 
          minValue={0} 
          maxValue={6000}
          arc={{
            width: 0.5,
            subArcs: [
              {limit: 1000, color: 'gray', glow: true},
              {limit: 2000, color: 'gray', glow: true},
              {limit: 3000, color: 'gray', glow: true},
              {limit: 4000, color: 'gray', glow: true},
              {limit: 4500, color: 'gray', glow: true},
              {limit: 5000, color: '#EA4228', glow: true },
              {limit: 6000, color: '#EA4228', glow: true },
            ]
          }}
          pointer={{
            type: "needle",
            color: "#EA4228",
            elastic: true,
            hideGrabHandle: true
          }}
          labels={{
            valueLabel:{
              offsetY: 25
            },
            tickLabels: {
              type: "outer",
              ticks: [
                {value: 0},
                {value: 1000},
                {value: 2000},
                {value: 3000},
                {value: 4000},
                {value: 5000},
                {value: 6000}
              ]
            }
          }}
        />
      </div>
      <div>
        <h2>Fuel</h2>
          <GaugeComponent 
          id="fuel-gauge" 
          value={rpm} 
          minValue={0} 
          maxValue={6000}
          arc={{
            width: 0.5,
            subArcs: [
              {limit: 1000, color: 'gray', glow: true},
              {limit: 2000, color: 'gray', glow: true},
              {limit: 3000, color: 'gray', glow: true},
              {limit: 4000, color: 'gray', glow: true},
              {limit: 4500, color: 'gray', glow: true},
              {limit: 5000, color: '#EA4228', glow: true },
              {limit: 6000, color: '#EA4228', glow: true },
            ]
          }}
          pointer={{
            type: "needle",
            color: "#EA4228",
            elastic: true,
            hideGrabHandle: true
          }}
          labels={{
            valueLabel:{
              offsetY: 25
            },
            tickLabels: {
              type: "outer",
              ticks: [
                {value: 0},
                {value: 1000},
                {value: 2000},
                {value: 3000},
                {value: 4000},
                {value: 5000},
                {value: 6000}
              ]
            }
          }}
        />
      </div>
      <div>
        <h2>Oil Pressure</h2>
          <GaugeComponent 
          id="oil-pressure-gauge" 
          value={rpm} 
          minValue={0} 
          maxValue={6000}
          arc={{
            width: 0.5,
            subArcs: [
              {limit: 1000, color: 'gray', glow: true},
              {limit: 2000, color: 'gray', glow: true},
              {limit: 3000, color: 'gray', glow: true},
              {limit: 4000, color: 'gray', glow: true},
              {limit: 4500, color: 'gray', glow: true},
              {limit: 5000, color: '#EA4228', glow: true },
              {limit: 6000, color: '#EA4228', glow: true },
            ]
          }}
          pointer={{
            type: "needle",
            color: "#EA4228",
            elastic: true,
            hideGrabHandle: true
          }}
          labels={{
            valueLabel:{
              offsetY: 25
            },
            tickLabels: {
              type: "outer",
              ticks: [
                {value: 0},
                {value: 1000},
                {value: 2000},
                {value: 3000},
                {value: 4000},
                {value: 5000},
                {value: 6000}
              ]
            }
          }}
        />
      </div>
    </div>
  );
}