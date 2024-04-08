from fastapi import FastAPI
from scraper import pull_current_data

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import seaborn as sns


app = FastAPI()
lower_bound = None
upper_bound = None
data = None

@app.get("/data")
async def data():
    update()
    return {"alert": check_anomaly()}


async def start():
    global lower_bound, upper_bound, data

    data = pd.read_csv(r"./hourly_electricity_data.csv",parse_dates=['period'],index_col='period',)
    # Create a new figure and axes with increased size
    plot()

    Q1 = data['current'].quantile(0.25)
    Q3 = data['current'].quantile(0.75)

    # Calculate the interquartile range (IQR)
    IQR = Q3 - Q1

    # Determine the lower and upper bounds for outliers
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR


async def check_anomaly(current):

    global lower_bound, upper_bound

    # Find anomalous points
    return (current < lower_bound) | (current > upper_bound)

async def update():
    global data

    new_data = pull_current_data()

    data.append(new_data)

    plot()

async def plot():
    global data

    fig, ax = plt.subplots(figsize=(30, 20))

    # For each day, plot the consumption trends
    for date, group in data.groupby(data.index.date):
        # Convert 'time' to matplotlib date format
        time = [mdates.date2num(pd.Timestamp(dt.time().isoformat())) for dt in group.index]
        ax.plot(time, group['current'], label=date)

    # Set the x-axis label
    ax.set_xlabel('Time')

    # Format x-tick labels as 24-hour clock and set them for every record
    ax.xaxis.set_major_locator(mdates.HourLocator(interval=1))   # to get a tick every hour
    ax.xaxis.set_minor_locator(mdates.MinuteLocator(interval=30))  # to get a tick every 30 minutes
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%H:%M:%S'))  # format x-tick labels as 24-hour clock

    # Set the y-axis label
    ax.set_ylabel('Consumption')

    # Set the title
    ax.set_title('Half-hourly Consumption Trends')

    # Display the legend
    ax.legend()

    fig.savefig(fname="./public/plot")

if __name__ == "__main__":
    start()
    app.run()