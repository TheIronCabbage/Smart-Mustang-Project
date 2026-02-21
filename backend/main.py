from data import Data, EngineSim
import websockets
import json
import asyncio

engine = EngineSim(900,0)

async def send_data(websocket):
    while True:
        state = engine.updateData()  # update RPM/speed/fuel/oil-pressure
        await websocket.send(json.dumps(state))
        await asyncio.sleep(0.1)  # 20 Hz updates

async def main():
    async with websockets.serve(send_data, "localhost", 6789):
        print("Python backend running on ws://localhost:6789/")
        await asyncio.Future()  # run forever

# Properly run the asyncio main function
if __name__ == "__main__":
    asyncio.run(main())