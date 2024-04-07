import csv
import datetime
import json
import asyncio
import aiohttp
from random import randint

async def get_data_async(date: str):
    url = "https://c-api-gateway.tkg.spdigital.io/skalbox/api"
    headers = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0",
               "Accept": "application/json, text/plain, */*",
               "Accept-Language": "en-US,en;q=0.5",
               "Content-Type": "application/json",
               "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VSkZRMEpFUWpjeU9UWkRRek01UkRZeU56ZzJPRFE0TVRaRk5UazFPVUk0T0RSRVF6bEdPQSJ9.eyJodHRwczovL3NwZ3JvdXAuY29tLnNnL3VzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJzZXRob2xhdkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik9uZyBNZWkgTGVuZyBZdm9ubmUiLCJudW1iZXIiOiI4NTAwMDIzMSIsImRpc3BsYXlfbmFtZSI6Im5hbWVsZXNzIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlfSwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5zcGRpZ2l0YWwuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDViZTk0NTU1MjRiMzFkNzczMGFiMTE5OCIsImF1ZCI6WyJodHRwczovL3Byb2ZpbGUudXAuc3BkaWdpdGFsLnNnLyIsImh0dHBzOi8vaWRlbnRpdHkuc3BkaWdpdGFsLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MTI0MjgxMDUsImV4cCI6MTcxMjQzMTcwNSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBvZmZsaW5lX2FjY2VzcyBtZSIsImF6cCI6IjBJNlhwWFRoZWhJVTNTZ2FTYnpyYUNnZWtrSGcyckpIIn0.6Z03GbAp6z7cBEXulMvdEARWcct5PSWWEmlv7RFAna9AFfHxUb1hEfKKB-fHnPq11T51x7dktwXTiJ92ao8WJ97H5VdREOgVN5tx9jSNc2AwGYd6yKnOdQrZGguMy0vKxv23zWqvHID7_x78QMOYke51wWk6A7qokeOprcFgnE8y2uebed7_soSxRFVEfgV5lhNz-nK01ddDiNCY8d71Igdd4shGb3dZvI-bWJwGovqb1Fv4z-4rYQT117GvDV2buTYOjSbJRf4LV_xQ2pQCDv66jCCAUQZbmrUfR4OFwpqhF6Z_TEwDga5hFBTvbl6qgCyaj-z6IkaS38S3_Z5JBA"
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
