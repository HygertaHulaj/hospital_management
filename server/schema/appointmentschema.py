from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class CreateAppointmentSchema(BaseModel):
    patient_id: int
    service: str
    doctor_id: int
    date: datetime
    time: str
    message: str


class UpdateAppointmentSchema(BaseModel):
    patient_id: int
    service: Optional[str]
    doctor_id: int
    date: Optional[datetime]
    time: Optional[str]
    message: Optional[str]

#     class Config:
#         orm_mode = True
