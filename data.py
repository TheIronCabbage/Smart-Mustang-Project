
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
            "fuel_level": 100
        }
        return data
