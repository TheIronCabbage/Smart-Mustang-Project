from dash import Dash, html, dcc
from dash.dependencies import Input, Output
import plotly.graph_objects as go
import random

app = Dash(__name__)

app.layout = html.Div([
    html.Div([
        dcc.Graph(
            id="rpm-gauge",
            style={"width": "600px", "height": "600px"}
        ),
        dcc.Graph(
            id="speed-gauge", 
            style={"width": "600px", "height": "600px"}
        ),
        # how fast the gauge values change
        dcc.Interval(id="interval", interval=500)
        # align the gauges in a row
    ], style={"display": "flex"})
    # background color outside the gauges
], style={"backgroundColor": "black", "height": "100vh", "color": "white"  })

# rpm gauge callback
@app.callback(
    Output("rpm-gauge", "figure"),
    Input("interval", "n_intervals")
)

def update_rpm(n):
    # fake random rpm values
    rpm = random.randint(700, 5000)

    # create rpm gauge
    fig = go.Figure(go.Indicator(
        mode="gauge+number",
        value=rpm,
        gauge={
            "axis": {"range": [0, 6000]},
        }
    ))
    # update background and font color
    fig.update_layout(
        paper_bgcolor="black",
        font={"color": "white"}
    )

    return fig

# speed gauge callback
@app.callback(
    Output("speed-gauge", "figure"),
    Input("interval", "n_intervals")
)

def update_speed(n):
    # fake random speed values
    speed = random.randint(0, 120)

    # create speed gauge
    fig = go.Figure(go.Indicator(
        mode="gauge+number",
        value=speed,
        gauge={
            "axis": {"range": [0, 120]},
        }
    ))
    # update background and font color
    fig.update_layout(
        paper_bgcolor="black",
        font={"color": "white"}
    )

    return fig