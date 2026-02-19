from data import Data
from dashboard import app

if __name__ == "__main__":
    test = Data("fake")
    data = test.get_data()
    print(data["rpm"])
    app.run(debug=True)