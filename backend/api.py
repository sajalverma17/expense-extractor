from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from extractor import extract as doExtract
import api_settings

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/extract/{keyword}")
def extract(keyword: str, startDate: str, endDate: str):
    return doExtract(keyword, startDate, endDate)