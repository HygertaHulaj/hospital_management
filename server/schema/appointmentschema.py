from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class CreateAppointmentSchema(BaseModel):
    patient_id: int
    service: str
    doctor_id: int
    date: datetime
    time: str
    message: Optional[str]


class UpdateAppointmentSchema(BaseModel):
    patient_id: Optional[int]
    service: Optional[str]
    doctor_id: Optional[int]
    date: Optional[datetime]
    time: Optional[str]
    message: Optional[str]


#     class Config:
#         orm_mode = True
