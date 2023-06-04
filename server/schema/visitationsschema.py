from datetime import date, time
from pydantic import BaseModel
from typing import Optional


class CreateVisitationSchema(BaseModel):
    patient_id: int
    visitor_name: str
    relation_to_patient: str
    date_of_visit: date
    time_of_visit: time


class UpdateVisitationSchema(BaseModel):
    patient_id: Optional[int]
    visitor_name: Optional[str]
    relation_to_patient: Optional[str]
    date_of_visit: Optional[date]
    time_of_visit: Optional[time]
