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
    # getter for rpms
    def get_rpm(self):
        return self.rpm
    # update rpms
    def update_rpm(self):
        if self.gear == 1:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 2500:
                self.rpm = round(self.rpm * 0.7)
                self.gear = 2
        elif self.gear == 2:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 3000:
                self.rpm = round(self.rpm * 0.7)
                self.gear = 3
        elif self.gear == 3:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 3300:
                self.rpm = round(self.rpm * 0.7)
                self.gear = 4
        elif self.gear == 4:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 3500:
                self.rpm = round(self.rpm * 0.7)
                self.gear = 5
        elif self.gear == 5:
            self.rpm += round((6000 - self.rpm) * 0.05)
            if self.rpm >= 5000:
                self.rpm = round(self.rpm * 0.7)
                self.gear = 6
        else:
            self.rpm = 900
            self.gear = 1
        
        
        return self.rpm
            
        
        
