import csv
import datetime
import json
import asyncio
import aiohttp
import dotenv
import os
from random import randint

dotenv.load_dotenv()

async def get_data_async(date: str):
    auth = os.getenv("auth")
    url = "https://c-api-gateway.tkg.spdigital.io/skalbox/api"
    headers = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0",
               "Accept": "application/json, text/plain, */*",
               "Accept-Language": "en-US,en;q=0.5",
               "Content-Type": "application/json",
               "Authorization": auth
               }
    payload = {"charts:hourly": {"accountNos": ["8941355284"], "date": date}}
    async with aiohttp.ClientSession() as session:
        try:
            async with session.post(url, headers=headers, json=payload) as response:
                if response.status != 200:
                    print(f"Error: HTTP status {response.status}")
                    return None
                return json.loads(await response.text())
        except Exception as e:
            print(f"Error: {e}")
            return None


def save_data(data):
    electricity_data = []

    for d in data:
        for i in d["charts:hourly"]["data"]["electricity"]["consumption"]:
            electricity_data.append([i["period"], i["current"], i["average"], i["efficient"]])

    with open("hourly_electricity_data.csv", "a", encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerows(electricity_data)


async def main():
    date = datetime.date.today()
    date -= datetime.timedelta(days=1)
    tasks = []
    while True:
        data = await get_data_async(str(date))
        if data is None:
            print("Error occurred, stopping.")
            break
        elif data["status"] == 150:
            print("No data available, stopping.")
            break
        elif not data["charts:hourly"]["data"]["electricity"]["consumption"]:
            print("No data available, stopping.")
            break
        tasks.append(data)
        date -= datetime.timedelta(days=1)
        await asyncio.sleep(randint(1, 5))  # add delay to avoid hitting rate limit
    save_data(tasks)


def pull_current_data():
    date = datetime.date.today()
    data = get_data_async(date)
    period, current, average, efficient = data[0]["charts:hourly"]["data"]["electricity"]["consumption"]
    return {"period": period, "current": current, "average": average, "efficient": efficient}


if __name__ == "__main__":
    asyncio.run(main())
