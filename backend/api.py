from fastapi import FastAPI
from extractor import extract as doExtract

app = FastAPI()

@app.get("/extract/{keyword}")
def extract(keyword: str, startDate: str, endDate: str):
    return doExtract(keyword, startDate, endDate)