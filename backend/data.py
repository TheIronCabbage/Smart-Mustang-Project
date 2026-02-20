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
            print("gear 1")
            while self.rpm < 2500:
                # possible rpm simulation
                self.rpm += (6000 - self.rpm) * 0.05
            self.gear += 1
        elif self.gear == 2:
            print("gear 2")
            # rpm drop after gear shift
            self.rpm *= 0.5
            while self.rpm < 3200:
                self.rpm += (6000 - self.rpm) * 0.05
            self.gear += 1
        elif self.gear == 3:
            print("gear 3")
            # rpm drop after gear shift
            self.rpm *= 0.5
            while self.rpm < 3500:
                self.rpm += (6000 - self.rpm) * 0.05
            self.gear += 1
        elif self.gear == 4:
            print("gear 4")
            # rpm drop after gear shift
            self.rpm *= 0.5
            while self.rpm < 4000:
                self.rpm += (6000 - self.rpm) * 0.05
            self.gear += 1
        elif self.gear == 5:
            print(self.rpm)
            # rpm drop after gear shift
            self.rpm *= 0.5
            print(self.rpm)
            while self.rpm < 4200:
                self.rpm += (6000 - self.rpm) * 0.05
            self.gear += 1
            
        else:
            self.rpm = 900
            self.gear = 1
        
        return self.get_rpm()
            
        
        
