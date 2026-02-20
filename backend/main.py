from data import Data, EngineSim
import websockets
import json
import asyncio

engine = EngineSim(900,0)

async def send_data(websocket, path):
    while True:
        engine.update_rpm()  # update RPM/speed
        state = engine.get_rpm()  # e.g., {"rpm": 3200, "speed": 35.4}
        await websocket.send(json.dumps(state))
        await asyncio.sleep(0.05)  # 20 Hz updates

async def main():
    async with websockets.serve(send_data, "localhost", 6789):
        print("Python backend running on ws://localhost:6789/")
        await asyncio.Future()  # run forever

# Properly run the asyncio main function
if __name__ == "__main__":
    asyncio.run(main())