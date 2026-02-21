import React, { useState, useEffect } from "react";
import {GaugeComponent} from "react-gauge-component";
import { defaultTickLabels } from "react-gauge-component/dist/lib/GaugeComponent/types/Tick";

export default function App() {
  const [rpm, setRpm] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [oil, setOil] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:6789/");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setRpm(data.rpm);
      setSpeed(data.speed);
      setFuel(data.fuelLevel);
      setOil(data.oilPressure);
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
          value={speed} 
          minValue={0} 
          maxValue={180}
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
                {value: 10},
                {value: 20},
                {value: 30},
                {value: 40},
                {value: 50},
                {value: 60},
                {value: 70},
                {value: 80},
                {value: 90},
                {value: 100},
                {value: 110},
                {value: 120},
                {value: 130},
                {value: 140},
                {value: 150},
                {value: 160},
                {value: 170},
                {value: 180},
              ]
            }
          }}
        />
      </div>
      <div>
        <h2>Fuel</h2>
          <GaugeComponent 
          id="fuel-gauge" 
          value={fuel} 
          minValue={0} 
          maxValue={100}
          arc={{
            width: 0.5,
            subArcs: [
              {limit: 10, color: '#EA4228', glow: true },
              {limit: 20, color: 'gray', glow: true},
              {limit: 30, color: 'gray', glow: true},
              {limit: 40, color: 'gray', glow: true},
              {limit: 50, color: 'gray', glow: true},
              {limit: 55, color: 'gray', glow: true},
              {limit: 100, color: 'gray', glow: true },
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
                {value: 25},
                {value: 50},
                {value: 75},
                {value: 100}
              ]
            }
          }}
        />
      </div>
      <div>
        <h2>Oil Pressure</h2>
          <GaugeComponent 
          id="oil-pressure-gauge" 
          value={oil} 
          minValue={0} 
          maxValue={60}
          arc={{
            width: 0.5,
            subArcs: [
              {limit: 10, color: '#EA4228', glow: true},
              {limit: 20, color: '#EA4228', glow: true},
              {limit: 30, color: '#69ea28', glow: true},
              {limit: 40, color: '#69ea28', glow: true},
              {limit: 50, color: '#EA4228', glow: true},
              {limit: 60, color: '#EA4228', glow: true }
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
                {value: 10},
                {value: 20},
                {value: 30},
                {value: 40},
                {value: 50},
                {value: 60}
              ]
            }
          }}
        />
      </div>
    </div>
  );
}