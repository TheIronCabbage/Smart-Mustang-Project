import math
import time

class Data:
    # replace with actual data when ready
    def __init__(self, source):
        self.source = source
    def get_data(self):
        if self.source == "fake":
           return self.fake_obd_data()
        else:
            return self.fake_obd_data()
    def fake_obd_data(self):
        data = {
            "rpm": 2500,
            "speed": 100
        }
        return data

# simulating rpm and speed changes 
class EngineSim:
    # initialize rpm and speed and gear
    def __init__(self, rpm, speed):
        self.rpm = rpm
        self.speed = speed
        self.gear = 1
        self.fuel = 100
        self.oil = 30
    # getter for rpms
    def get_rpm(self):
        return self.rpm
    # update rpms
    def update_rpm(self):
        if self.gear == 1:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 2500:
                self.rpm = round(self.rpm * 0.6)
                self.gear = 2
        elif self.gear == 2:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 3000:
                self.rpm = round(self.rpm * 0.5)
                self.gear = 3
        elif self.gear == 3:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 3500:
                self.rpm = round(self.rpm * 0.4)
                self.gear = 4
        elif self.gear == 4:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 4000:
                self.rpm = round(self.rpm * 0.4)
                self.gear = 5
        elif self.gear == 5:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 5500:
                self.rpm = round(self.rpm * 0.3)
                self.gear = 6
        else:
            self.rpm = 900
            self.gear = 1
    
    # getter for speed
    def get_speed(self):
        return self.speed
    
    # update speed
    # formula for speed in MPH:
    #
    #           RPMs * Tire Diameter
    # MPH = -----------------------------
    #       Gear Ratio * Axle Ratio * 336
    # 
    # **** gear ratios and axle ratios are exact ****
    # **** tire diameter is rounded up ****
    
    def update_speed(self):
        if self.gear == 1:
            self.speed = round((self.rpm * 26) / (3.35 * 3.27 * 336))
        elif self.gear == 2:
            self.speed = round((self.rpm * 26) / (1.93 * 3.27 * 336))
        elif self.gear == 3:
            self.speed = round((self.rpm * 26) / (1.29 * 3.27 * 336))
        elif self.gear == 4:
            self.speed = round((self.rpm * 26) / (1.00 * 3.27 * 336))
        elif self.gear == 5:
            self.speed = round((self.rpm * 26) / (0.68 * 3.27 * 336))
        else:
            self.speed = 0
    
    # getter for fuel
    def get_fuel(self):
        return round(self.fuel)
    # update fuel
    def update_fuel(self):
        if self.fuel > 0:
            self.fuel -= 0.01
        else:
            self.fuel = 100
    # getter for oil pressure
    def get_oilPressure(self):
        return self.oil
    # update oil pressure
    def update_oilPressure(self):
        self.oil = 30
    
    # update the data and format it to send over websocket
    def updateData(self):
        self.update_rpm()
        self.update_speed()
        self.update_fuel()
        self.update_oilPressure()
        data = {
            "rpm": self.get_rpm(),
            "speed": self.get_speed(),
            "fuelLevel": self.get_fuel(),
            "oilPressure": self.get_oilPressure()
        }
        return data
        
