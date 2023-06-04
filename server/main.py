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
from appointment import appointmentrouter
from medicaltest import medicaltestrouter
from departments import departmentrouter
from beds import bedrouter
from surgery import surgeryrouter
from  blooddonation import blooddoantionrouter
from  nurses import nurserouter
from hospital import hospitalrouter
from bloodrequest import bloodrequestrouter
from shift import shiftrouter
from complaints import complaintsrouter
from visitation import visitationrouter
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




app.include_router(visitationrouter.router)
app.include_router(complaintsrouter.router)
app.include_router(shiftrouter.router)
app.include_router(bloodrequestrouter.router)
app.include_router(nurserouter.router)
app.include_router(hospitalrouter.router)

app.include_router(blooddoantionrouter.router)
app.include_router(surgeryrouter.router)
app.include_router(bedrouter.router)
app.include_router(departmentrouter.router)
app.include_router(patientrouter.router)
app.include_router(medicaltestrouter.router)
app.include_router(doctorsrouter.router)
app.include_router(appointmentrouter.router)

# app.include_router(orderrouter.router)


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)

