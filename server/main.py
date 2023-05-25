from datetime import datetime
from typing import List
from fastapi import FastAPI, HTTPException, Depends
from psycopg2 import IntegrityError
import sqlalchemy
from sqlalchemy.orm import Session

import uvicorn

from fastapi import FastAPI
from config.database import engine
from config.database import Base
from fastapi.middleware.cors import CORSMiddleware
from patient import patientrouter
from doctors import doctorsrouter

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)


@app.get("/")
def hello():
    return "Hello"


app.include_router(patientrouter.router)



if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)

